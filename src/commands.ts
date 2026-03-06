import { ConnectorAction } from "./action";

export type Network = "mainnet" | "testnet";

export type SigningMethod = "sign-with-keychain" | "sign-with-ledger";

export const DEFAULT_LEDGER_HD_PATH = "m/44'/397'/0'/0'/1'";

function signingPart(signingMethod: SigningMethod, ledgerHdPath?: string): string {
    if (signingMethod === "sign-with-ledger") {
        const hdPath = ledgerHdPath || DEFAULT_LEDGER_HD_PATH;
        return `sign-with-ledger --seed-phrase-hd-path '${shellEscape(hdPath)}'`;
    }
    return "sign-with-keychain";
}

export function yoctoToNear(yoctoAmount: string): string {
    if (yoctoAmount === "0") return "0";
    const YOCTO_DECIMALS = 24;
    const padded = yoctoAmount.padStart(YOCTO_DECIMALS + 1, "0");
    const intPart = padded.slice(0, -YOCTO_DECIMALS) || "0";
    const fracPart = padded.slice(-YOCTO_DECIMALS).replace(/0+$/, "");
    return fracPart ? `${intPart}.${fracPart}` : intPart;
}

export function gasToTgas(gasAmount: string): string {
    if (gasAmount === "0") return "0";
    const TGAS_DECIMALS = 12;
    const padded = gasAmount.padStart(TGAS_DECIMALS + 1, "0");
    const intPart = padded.slice(0, -TGAS_DECIMALS) || "0";
    const fracPart = padded.slice(-TGAS_DECIMALS).replace(/0+$/, "");
    return fracPart ? `${intPart}.${fracPart}` : intPart;
}

function shellEscape(s: string): string {
    return s.replace(/'/g, "'\\''");
}

export interface AddFunctionCallKeyParams {
    contractId: string;
    publicKey: string;
    allowMethods: AddFunctionCallKey_AllowMethods;
    gasAllowance?: AddFunctionCallKey_GasAllowance;
}

export type AddFunctionCallKey_AllowMethods = { anyMethod: true } | { anyMethod: false; methodNames: string[] };

export type AddFunctionCallKey_GasAllowance = { kind: "unlimited" } | { kind: "limited"; amount: string };

export function buildAddKeyCommand({
    accountId,
    addFunctionCallKey,
    network,
    signingMethod = "sign-with-keychain",
    ledgerHdPath,
}: {
    accountId: string;
    addFunctionCallKey: AddFunctionCallKeyParams;
    network: Network;
    signingMethod?: SigningMethod;
    ledgerHdPath?: string;
}): string {
    const { contractId, publicKey, allowMethods, gasAllowance } = addFunctionCallKey;

    // Determine the allowance string (default: 0.25 NEAR)
    let allowanceArg = "'0.25 NEAR'";
    if (gasAllowance) {
        if (gasAllowance.kind === "unlimited") {
            allowanceArg = "'unlimited'";
        } else {
            allowanceArg = `'${yoctoToNear(gasAllowance.amount)} NEAR'`;
        }
    }

    const parts: string[] = ["near account"];
    parts.push(`add-key '${shellEscape(accountId)}'`);
    parts.push("grant-function-call-access");
    parts.push(`--allowance ${allowanceArg}`);
    parts.push(`--contract-account-id '${shellEscape(contractId)}'`);

    if (allowMethods.anyMethod || allowMethods.methodNames.length === 0) {
        parts.push(`--function-names ''`);
    } else {
        parts.push(`--function-names '${shellEscape(allowMethods.methodNames.join(", "))}'`);
    }

    parts.push(`use-manually-provided-public-key ${publicKey}`);
    parts.push(`network-config ${network}`);
    parts.push(signingPart(signingMethod, ledgerHdPath));

    return parts.join(" \\\n    ");
}

function buildActionPart(action: ConnectorAction): string {
    switch (action.type) {
        case "CreateAccount":
            return "add-action create-account";

        case "Transfer":
            return `add-action transfer '${yoctoToNear(action.params.deposit)} NEAR'`;

        case "FunctionCall": {
            const args = JSON.stringify(action.params.args);
            return [
                `add-action function-call '${shellEscape(action.params.methodName)}'`,
                `json-args '${shellEscape(args)}'`,
                `prepaid-gas '${gasToTgas(action.params.gas)} Tgas'`,
                `attached-deposit '${yoctoToNear(action.params.deposit)} NEAR'`,
            ].join(" ");
        }

        case "AddKey":
            if (action.params.accessKey.permission === "FullAccess") {
                return `add-action add-key grant-full-access use-manually-provided-public-key ${action.params.publicKey}`;
            } else {
                const perm = action.params.accessKey.permission;
                const addKeyParts = ["add-action add-key grant-function-call-access"];
                if (perm.allowance) addKeyParts.push(`--allowance '${yoctoToNear(perm.allowance)} NEAR'`);
                addKeyParts.push(`--contract-account-id '${shellEscape(perm.receiverId)}'`);
                if (perm.methodNames && perm.methodNames.length > 0) {
                    addKeyParts.push(`--function-names '${shellEscape(perm.methodNames.join(", "))}'`);
                }
                addKeyParts.push(`use-manually-provided-public-key ${action.params.publicKey}`);
                return addKeyParts.join(" ");
            }

        case "DeleteKey":
            return `add-action delete-key ${action.params.publicKey}`;

        case "DeleteAccount":
            return `add-action delete-account beneficiary '${shellEscape(action.params.beneficiaryId)}'`;

        case "Stake":
            return `add-action stake '${yoctoToNear(action.params.stake)} NEAR' ${action.params.publicKey}`;

        case "DeployContract":
        case "DeployGlobalContract":
            throw new Error(
                `${action.type} is not supported by NEAR CLI wallet — binary data cannot be passed via command line`,
            );

        case "UseGlobalContract": {
            const id = action.params.contractIdentifier;
            if ("accountId" in id) {
                return `add-action use-global-contract use-global-account-id '${shellEscape(id.accountId)}'`;
            }
            return `add-action use-global-contract use-global-hash '${shellEscape(id.codeHash)}'`;
        }

        default:
            throw new Error("Unknown action type");
    }
}

export function buildTransactionCommand({
    signerId,
    receiverId,
    actions,
    network,
    signingMethod = "sign-with-keychain",
    ledgerHdPath,
}: {
    signerId: string;
    receiverId: string;
    actions: ConnectorAction[];
    network: Network;
    signingMethod?: SigningMethod;
    ledgerHdPath?: string;
}): string {
    const sign = signingPart(signingMethod, ledgerHdPath);

    if (actions.length === 1 && actions[0].type === "FunctionCall") {
        const fc = actions[0].params;
        const args = JSON.stringify(fc.args);
        return [
            "near contract",
            "call-function",
            `as-transaction '${shellEscape(receiverId)}' '${shellEscape(fc.methodName)}'`,
            `json-args '${shellEscape(args)}'`,
            `prepaid-gas '${gasToTgas(fc.gas)} Tgas'`,
            `attached-deposit '${yoctoToNear(fc.deposit)} NEAR'`,
            `sign-as '${shellEscape(signerId)}'`,
            `network-config ${network}`,
            sign,
        ].join(" \\\n    ");
    }

    if (actions.length === 1 && actions[0].type === "Transfer") {
        return [
            "near tokens",
            `'${shellEscape(signerId)}'`,
            `send-near '${shellEscape(receiverId)}' '${yoctoToNear(actions[0].params.deposit)} NEAR'`,
            `network-config ${network}`,
            sign,
        ].join(" \\\n    ");
    }

    if (actions.length === 1 && actions[0].type === "AddKey") {
        const action = actions[0];
        const parts: string[] = ["near account"];
        parts.push(`add-key '${shellEscape(signerId)}'`);
        if (action.params.accessKey.permission === "FullAccess") {
            parts.push("grant-full-access");
        } else {
            const perm = action.params.accessKey.permission;
            parts.push("grant-function-call-access");
            if (perm.allowance) parts.push(`--allowance '${yoctoToNear(perm.allowance)} NEAR'`);
            parts.push(`--contract-account-id '${shellEscape(perm.receiverId)}'`);
            if (perm.methodNames && perm.methodNames.length > 0) {
                parts.push(`--function-names '${shellEscape(perm.methodNames.join(", "))}'`);
            }
        }
        parts.push(`use-manually-provided-public-key ${action.params.publicKey}`);
        parts.push(`network-config ${network}`);
        parts.push(sign);
        return parts.join(" \\\n    ");
    }

    if (actions.every((a) => a.type === "DeleteKey")) {
        const keys = actions.map((a) => a.params.publicKey).join(",");
        return [
            "near account",
            `delete-keys '${shellEscape(signerId)}' public-keys ${keys}`,
            `network-config ${network}`,
            sign,
        ].join(" \\\n    ");
    }

    const actionParts = actions.map(buildActionPart);
    return [
        "near transaction",
        `construct-transaction '${shellEscape(signerId)}' '${shellEscape(receiverId)}'`,
        ...actionParts,
        "skip",
        `network-config ${network}`,
        sign,
    ].join(" \\\n    ");
}

export function buildMetaTransactionCommand({
    signerId,
    receiverId,
    actions,
    network,
    signingMethod = "sign-with-keychain",
    ledgerHdPath,
}: {
    signerId: string;
    receiverId: string;
    actions: ConnectorAction[];
    network: Network;
    signingMethod?: SigningMethod;
    ledgerHdPath?: string;
}): string {
    const actionParts = actions.map(buildActionPart);
    return [
        "near transaction",
        `construct-meta-transaction '${shellEscape(signerId)}' '${shellEscape(receiverId)}'`,
        ...actionParts,
        "skip",
        `network-config ${network}`,
        `${signingPart(signingMethod, ledgerHdPath)} display`,
    ].join(" \\\n    ");
}

export function buildSignMessageCommand({
    message,
    recipient,
    nonce,
    network,
    signerId,
    signingMethod = "sign-with-keychain",
    ledgerHdPath,
}: {
    message: string;
    recipient: string;
    nonce: string;
    network: Network;
    signerId: string;
    signingMethod?: SigningMethod;
    ledgerHdPath?: string;
}): string {
    const parts = [
        "near message sign-nep413",
        `utf8 '${shellEscape(message)}'`,
        `nonce '${shellEscape(nonce)}'`,
        `recipient '${shellEscape(recipient)}'`,
        `sign-as '${shellEscape(signerId)}'`,
    ];

    if (signingMethod === "sign-with-ledger") {
        // sign-with-ledger under sign-nep413 does not accept network-config
        parts.push(signingPart(signingMethod, ledgerHdPath));
    } else {
        parts.push(signingPart(signingMethod, ledgerHdPath));
        parts.push(`network-config ${network}`);
    }

    return parts.join(" \\\n    ");
}
