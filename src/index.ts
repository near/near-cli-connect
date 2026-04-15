import { baseDecode } from "@near-js/utils";

import { ConnectorAction } from "./action";
import {
    buildAddKeyCommand,
    buildTransactionCommand,
    buildMetaTransactionCommand,
    buildSignMessageCommand,
    Network,
    SigningMethod,
    DEFAULT_LEDGER_HD_PATH,
    AddFunctionCallKeyParams,
} from "./commands";
import {
    headHtml,
    accountIdInputHtml,
    addKeyCommandHtml,
    transactionCommandHtml,
    signMessageCommandHtml,
    delegateActionCommandHtml,
    signingMethodSelectorHtml,
} from "./view";

interface StoredFunctionCallKey {
    publicKey: string;
    contractId: string;
}

const storage = () => window.selector.storage;

async function getStoredAccountId(network: string): Promise<string> {
    return (await storage().get(`cli:${network}:accountId`)) || "";
}

async function setStoredAccountId(network: string, accountId: string): Promise<void> {
    await storage().set(`cli:${network}:accountId`, accountId);
}

async function removeStoredAccountId(network: string): Promise<void> {
    await storage().remove(`cli:${network}:accountId`);
}

async function getStoredFunctionCallKey(network: string): Promise<StoredFunctionCallKey | null> {
    const raw = await storage().get(`cli:${network}:functionCallKey`);
    return raw ? JSON.parse(raw) : null;
}

async function setStoredFunctionCallKey(network: string, key: StoredFunctionCallKey): Promise<void> {
    await storage().set(`cli:${network}:functionCallKey`, JSON.stringify(key));
}

async function removeStoredFunctionCallKey(network: string): Promise<void> {
    await storage().remove(`cli:${network}:functionCallKey`);
}

async function getStoredSigningMethod(network: string): Promise<SigningMethod> {
    const raw = await storage().get(`cli:${network}:signingMethod`);
    return raw === "sign-with-ledger" ? "sign-with-ledger" : "sign-with-keychain";
}

async function setStoredSigningMethod(network: string, method: SigningMethod): Promise<void> {
    await storage().set(`cli:${network}:signingMethod`, method);
}

async function removeStoredSigningMethod(network: string): Promise<void> {
    await storage().remove(`cli:${network}:signingMethod`);
}

async function getStoredLedgerHdPath(network: string): Promise<string> {
    return (await storage().get(`cli:${network}:ledgerHdPath`)) || DEFAULT_LEDGER_HD_PATH;
}

async function setStoredLedgerHdPath(network: string, hdPath: string): Promise<void> {
    await storage().set(`cli:${network}:ledgerHdPath`, hdPath);
}

async function removeStoredLedgerHdPath(network: string): Promise<void> {
    await storage().remove(`cli:${network}:ledgerHdPath`);
}

function getRpcUrl(network: string): string {
    const providers = window.selector?.providers?.[network as "mainnet" | "testnet"];
    const fallback = network === "mainnet" ? "https://rpc.mainnet.near.org" : "https://rpc.testnet.near.org";
    return providers && providers.length > 0 ? providers[0] : fallback;
}

async function txStatus(rpcUrl: string, txHash: string, signerId: string): Promise<any> {
    const res = await fetch(rpcUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "tx",
            params: { tx_hash: txHash, sender_account_id: signerId, wait_until: "NONE" },
        }),
    });
    const json = await res.json();
    if (json.error) throw new Error(json.error.message || JSON.stringify(json.error));
    return json.result;
}

function renderPage(html: string): HTMLElement {
    document.head.innerHTML = headHtml;
    document.body.innerHTML = "";
    const root = document.createElement("div");
    root.style.height = "100%";
    root.innerHTML = html;
    document.body.appendChild(root);
    window.focus();
    return root;
}

function clickCopyButton(btn: HTMLButtonElement): void {
    const command = btn.getAttribute("data-command") || "";
    navigator.clipboard
        .writeText(command)
        .then(() => {
            const orig = btn.textContent;
            btn.textContent = "Copied!";
            setTimeout(() => {
                btn.textContent = orig;
            }, 1500);
        })
        .catch(() => {
            const code = btn.parentElement?.querySelector("code");
            if (code) {
                const range = document.createRange();
                range.selectNodeContents(code);
                const sel = window.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
            }
        });
}

function setupCopyButtons(root: HTMLElement): void {
    const copyBtns = root.querySelectorAll<HTMLButtonElement>(".copy-btn");
    copyBtns.forEach((btn) => {
        btn.addEventListener("click", () => clickCopyButton(btn));
    });

    document.addEventListener("keydown", (e) => {
        const active = document.activeElement;
        if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
        if (e.key === "c" && copyBtns.length > 0) {
            e.preventDefault();
            clickCopyButton(copyBtns[0]);
        }
    });
}

function showError(root: HTMLElement, message: string): void {
    const el = root.querySelector<HTMLElement>("#error");
    if (el) {
        el.textContent = message;
        el.style.display = "block";
    }
}

function promptAccountId(opts: {
    title: string;
    subtitle?: string;
    buttonText: string;
    step?: string;
}): Promise<string> {
    return new Promise((resolve) => {
        const root = renderPage(accountIdInputHtml(opts));
        window.selector.ui.showIframe();

        const input = root.querySelector<HTMLInputElement>("#account-id")!;
        const btn = root.querySelector<HTMLButtonElement>("#submit-btn")!;

        const submit = () => {
            const accountId = input.value.trim();
            if (!accountId) {
                showError(root, "Please enter an account ID");
                return;
            }
            resolve(accountId);
        };

        btn.addEventListener("click", submit);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") submit();
        });
        requestAnimationFrame(() => input.focus());
    });
}

interface SigningPreference {
    signingMethod: SigningMethod;
    ledgerHdPath?: string;
}

function promptSigningMethod(opts: { step?: string }): Promise<SigningPreference> {
    return new Promise((resolve) => {
        const root = renderPage(
            signingMethodSelectorHtml({
                step: opts.step,
                defaultHdPath: DEFAULT_LEDGER_HD_PATH,
            }),
        );
        window.selector.ui.showIframe();

        let selected: SigningMethod = "sign-with-keychain";

        const cards = root.querySelectorAll<HTMLElement>(".signing-method-card");
        const hdPathGroup = root.querySelector<HTMLElement>("#hd-path-group")!;
        const hdPathInput = root.querySelector<HTMLInputElement>("#hd-path")!;
        const btn = root.querySelector<HTMLButtonElement>("#submit-signing-method-btn")!;

        function selectCard(card: HTMLElement) {
            cards.forEach((c) => {
                c.classList.remove("selected");
                c.setAttribute("aria-pressed", "false");
            });
            card.classList.add("selected");
            card.setAttribute("aria-pressed", "true");
            selected = card.getAttribute("data-method") as SigningMethod;
            hdPathGroup.style.display = selected === "sign-with-ledger" ? "block" : "none";
        }

        const cardsArray = Array.from(cards);

        cards.forEach((card) => {
            card.addEventListener("click", () => selectCard(card));
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    submit();
                    return;
                }
                const idx = cardsArray.indexOf(card);
                if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = cardsArray[(idx + 1) % cardsArray.length];
                    selectCard(next);
                    next.focus();
                } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = cardsArray[(idx - 1 + cardsArray.length) % cardsArray.length];
                    selectCard(prev);
                    prev.focus();
                }
            });
        });

        function submit() {
            const result: SigningPreference = { signingMethod: selected };
            if (selected === "sign-with-ledger") {
                const hdPath = hdPathInput.value.trim();
                if (!hdPath) {
                    showError(root, "Please enter an HD derivation path");
                    return;
                }
                result.ledgerHdPath = hdPath;
            }
            resolve(result);
        }

        btn.addEventListener("click", submit);

        root.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && document.activeElement !== hdPathInput) {
                e.preventDefault();
                submit();
            }
        });

        const selectedCard = root.querySelector<HTMLElement>(".signing-method-card.selected");
        if (selectedCard) requestAnimationFrame(() => selectedCard.focus());
    });
}

function parseHashInput(raw: string): string {
    const urlMatch = raw.match(/(?:txns?|transactions)\/([A-Za-z0-9]{43,44})/);
    if (urlMatch) return urlMatch[1];
    const match = raw.match(/(?:Transaction ID:\s*)?([A-Za-z0-9]{43,44})/);
    return match ? match[1] : raw;
}

async function verifyTransaction(rpcUrl: string, txHash: string, signerId: string, retries = 5): Promise<any> {
    let lastError: unknown;
    for (let i = 0; i < retries; i++) {
        try {
            return await txStatus(rpcUrl, txHash, signerId);
        } catch (err) {
            lastError = err;
            if (i < retries - 1) await new Promise((r) => setTimeout(r, 2000));
        }
    }
    throw lastError ?? new Error(`Transaction ${txHash} not found after ${retries} attempts`);
}

function promptHashAndVerify(renderHtml: string, rpcUrl: string, signerId: string): Promise<any> {
    return new Promise((resolve) => {
        const root = renderPage(renderHtml);
        setupCopyButtons(root);
        window.selector.ui.showIframe();

        const input = root.querySelector<HTMLInputElement>("#tx-hash")!;
        const btn = root.querySelector<HTMLButtonElement>("#verify-btn")!;

        const submit = async () => {
            const raw = input.value.trim();
            if (!raw) {
                showError(root, "Please paste the transaction hash or explorer URL");
                return;
            }

            const hash = parseHashInput(raw);
            btn.disabled = true;
            btn.textContent = "Verifying...";

            try {
                const result = await verifyTransaction(rpcUrl, hash, signerId);
                resolve(result);
            } catch {
                showError(root, "Transaction not found. Please check the hash and try again.");
                btn.disabled = false;
                btn.textContent = "Verify";
            }
        };

        btn.addEventListener("click", submit);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") submit();
        });
    });
}

interface SignMessageOutput {
    accountId: string;
    publicKey: string;
    signature: string;
}

function promptSignMessageOutput(command: string, step?: string): Promise<SignMessageOutput> {
    return new Promise((resolve) => {
        const root = renderPage(signMessageCommandHtml(command, step));
        setupCopyButtons(root);
        window.selector.ui.showIframe();

        const textarea = root.querySelector<HTMLTextAreaElement>("#sign-output")!;
        const btn = root.querySelector<HTMLButtonElement>("#submit-sign-btn")!;

        btn.addEventListener("click", () => {
            const raw = textarea.value.trim();
            if (!raw) {
                showError(root, "Please paste the command output");
                return;
            }

            try {
                const jsonMatch = raw.match(/\{[\s\S]*"signature"[\s\S]*\}/);
                if (!jsonMatch) throw new Error("No valid JSON found");

                const parsed = JSON.parse(jsonMatch[0]);
                if (!parsed.signature || !parsed.publicKey) {
                    throw new Error("Missing signature or publicKey in output");
                }

                const sigData = parsed.signature.replace(/^ed25519:/, "");
                resolve({
                    accountId: parsed.accountId || "",
                    publicKey: parsed.publicKey,
                    signature: Buffer.from(baseDecode(sigData)).toString("base64"),
                });
            } catch (err: any) {
                showError(root, `Could not parse output: ${err.message}`);
            }
        });
    });
}

function extractBase64(raw: string): string | null {
    const trimmed = raw.trim();
    // Try to find the longest base64-looking substring (at least 20 chars)
    const matches = trimmed.match(/[A-Za-z0-9+/=]{20,}/g);
    if (!matches) return null;
    // Return the longest match (the blob itself, not short fragments)
    return matches.reduce((a, b) => (a.length >= b.length ? a : b));
}

function promptDelegateActionOutput(command: string, step?: string): Promise<string> {
    return new Promise((resolve) => {
        const root = renderPage(delegateActionCommandHtml(command, step));
        setupCopyButtons(root);
        window.selector.ui.showIframe();

        const textarea = root.querySelector<HTMLTextAreaElement>("#delegate-output")!;
        const btn = root.querySelector<HTMLButtonElement>("#submit-delegate-btn")!;

        btn.addEventListener("click", () => {
            const raw = textarea.value.trim();
            if (!raw) {
                showError(root, "Please paste the base64 output from the command");
                return;
            }

            const base64 = extractBase64(raw);
            if (!base64) {
                showError(root, "Could not find valid base64 data in the pasted output");
                return;
            }

            resolve(base64);
        });
    });
}

class NearCliWallet {
    signIn = async ({
        addFunctionCallKey,
        network,
    }: {
        addFunctionCallKey?: AddFunctionCallKeyParams;
        network: string;
    }) => {
        const existingAccountId = await getStoredAccountId(network);
        const existingKey = await getStoredFunctionCallKey(network);

        const hasMatchingKey =
            existingKey?.publicKey &&
            (!addFunctionCallKey ||
                (existingKey.contractId === addFunctionCallKey.contractId &&
                    existingKey.publicKey === addFunctionCallKey.publicKey));

        if (existingAccountId && (!addFunctionCallKey || hasMatchingKey)) {
            return [{ accountId: existingAccountId, publicKey: existingKey?.publicKey ?? "" }];
        }

        const needsAccountId = !existingAccountId;
        let totalSteps = 1; // signing method
        if (needsAccountId) totalSteps++;
        if (addFunctionCallKey) totalSteps++;
        let currentStep = 0;

        const accountId =
            existingAccountId ||
            (await promptAccountId({
                title: "Connect with NEAR CLI",
                subtitle: "Enter your NEAR account ID",
                buttonText: "Next",
                step: `Step ${++currentStep} of ${totalSteps}`,
            }));

        const { signingMethod, ledgerHdPath } = await promptSigningMethod({
            step: `Step ${++currentStep} of ${totalSteps}`,
        });
        await setStoredSigningMethod(network, signingMethod);
        if (ledgerHdPath) await setStoredLedgerHdPath(network, ledgerHdPath);

        if (addFunctionCallKey) {
            const { publicKey } = addFunctionCallKey;

            const command = buildAddKeyCommand({
                accountId,
                addFunctionCallKey,
                network: network as Network,
                signingMethod,
                ledgerHdPath,
            });

            const rpcUrl = getRpcUrl(network);
            await promptHashAndVerify(
                addKeyCommandHtml(command, `Step ${++currentStep} of ${totalSteps}`),
                rpcUrl,
                accountId,
            );

            const storedKey: StoredFunctionCallKey = {
                publicKey,
                contractId: addFunctionCallKey.contractId,
            };
            await setStoredAccountId(network, accountId);
            await setStoredFunctionCallKey(network, storedKey);

            return [{ accountId, publicKey }];
        }

        await setStoredAccountId(network, accountId);
        return [{ accountId, publicKey: "" }];
    };

    signInAndSignMessage = async ({
        addFunctionCallKey,
        network,
        messageParams,
    }: {
        addFunctionCallKey?: AddFunctionCallKeyParams;
        network: Network;
        messageParams: any;
    }) => {
        const { message, recipient, nonce } = messageParams;
        const existingAccountId = await getStoredAccountId(network);
        const existingKey = await getStoredFunctionCallKey(network);

        const needsAccountId = !existingAccountId;
        const needsAddKey =
            !!addFunctionCallKey &&
            (!existingKey?.publicKey ||
                existingKey.contractId !== addFunctionCallKey.contractId ||
                existingKey.publicKey !== addFunctionCallKey.publicKey);

        let totalSteps = 2; // signing method + sign message
        if (needsAccountId) totalSteps++;
        if (needsAddKey) totalSteps++;
        let currentStep = 0;

        const accountId =
            existingAccountId ||
            (await promptAccountId({
                title: "Connect with NEAR CLI",
                subtitle: "Enter your NEAR account ID to sign in and sign a message",
                buttonText: "Next",
                step: `Step ${++currentStep} of ${totalSteps}`,
            }));

        const { signingMethod, ledgerHdPath } = await promptSigningMethod({
            step: `Step ${++currentStep} of ${totalSteps}`,
        });
        await setStoredSigningMethod(network, signingMethod);
        if (ledgerHdPath) await setStoredLedgerHdPath(network, ledgerHdPath);

        const nonceBase64 = Buffer.from(nonce).toString("base64");
        const command = buildSignMessageCommand({
            message,
            recipient,
            nonce: nonceBase64,
            network,
            signerId: accountId,
            signingMethod,
            ledgerHdPath,
        });

        const output = await promptSignMessageOutput(command, `Step ${++currentStep} of ${totalSteps}`);

        let publicKey = output.publicKey;
        if (needsAddKey && addFunctionCallKey) {
            publicKey = addFunctionCallKey.publicKey;

            const addKeyCmd = buildAddKeyCommand({
                accountId,
                addFunctionCallKey,
                network: network as Network,
                signingMethod,
                ledgerHdPath,
            });

            const rpcUrl = getRpcUrl(network);
            await promptHashAndVerify(
                addKeyCommandHtml(addKeyCmd, `Step ${++currentStep} of ${totalSteps}`),
                rpcUrl,
                accountId,
            );

            const storedKey: StoredFunctionCallKey = {
                publicKey: addFunctionCallKey.publicKey,
                contractId: addFunctionCallKey.contractId,
            };
            await setStoredFunctionCallKey(network, storedKey);
        }

        await setStoredAccountId(network, accountId);

        return [
            {
                accountId,
                publicKey,
                signedMessage: {
                    accountId: output.accountId || accountId,
                    publicKey: output.publicKey,
                    signature: output.signature,
                },
            },
        ];
    };

    signOut = async ({ network }: { network: string }) => {
        await removeStoredAccountId(network);
        await removeStoredFunctionCallKey(network);
        await removeStoredSigningMethod(network);
        await removeStoredLedgerHdPath(network);
    };

    getAccounts = async ({ network }: { network: string }) => {
        const accountId = await getStoredAccountId(network);
        if (!accountId) return [];
        const fcKey = await getStoredFunctionCallKey(network);
        return [{ accountId, publicKey: fcKey?.publicKey ?? "" }];
    };

    signAndSendTransaction = async ({
        receiverId,
        actions,
        network,
    }: {
        receiverId: string;
        actions: ConnectorAction[];
        network: string;
    }): Promise<any> => {
        const accountId = await getStoredAccountId(network);
        if (!accountId) throw new Error("Wallet not signed in");

        const signingMethod = await getStoredSigningMethod(network);
        const ledgerHdPath = signingMethod === "sign-with-ledger" ? await getStoredLedgerHdPath(network) : undefined;

        const command = buildTransactionCommand({
            signerId: accountId,
            receiverId,
            actions,
            network: network as Network,
            signingMethod,
            ledgerHdPath,
        });

        try {
            const rpcUrl = getRpcUrl(network);
            return await promptHashAndVerify(transactionCommandHtml(command), rpcUrl, accountId);
        } finally {
            window.selector.ui.hideIframe();
        }
    };

    signAndSendTransactions = async ({
        transactions,
        network,
    }: {
        transactions: { receiverId: string; actions: ConnectorAction[] }[];
        network: string;
    }): Promise<any[]> => {
        const accountId = await getStoredAccountId(network);
        if (!accountId) throw new Error("Wallet not signed in");

        const signingMethod = await getStoredSigningMethod(network);
        const ledgerHdPath = signingMethod === "sign-with-ledger" ? await getStoredLedgerHdPath(network) : undefined;

        const rpcUrl = getRpcUrl(network);
        const results: any[] = [];

        try {
            for (const tx of transactions) {
                const command = buildTransactionCommand({
                    signerId: accountId,
                    receiverId: tx.receiverId,
                    actions: tx.actions,
                    network: network as Network,
                    signingMethod,
                    ledgerHdPath,
                });

                const result = await promptHashAndVerify(transactionCommandHtml(command), rpcUrl, accountId);
                results.push(result);
            }

            return results;
        } finally {
            window.selector.ui.hideIframe();
        }
    };

    signMessage = async ({ message, nonce, recipient, network }: any) => {
        const accountId = await getStoredAccountId(network);
        if (!accountId) throw new Error("Wallet not signed in");

        const signingMethod = await getStoredSigningMethod(network);
        const ledgerHdPath = signingMethod === "sign-with-ledger" ? await getStoredLedgerHdPath(network) : undefined;

        const nonceBase64 = Buffer.from(nonce).toString("base64");
        const command = buildSignMessageCommand({
            message,
            recipient,
            nonce: nonceBase64,
            network,
            signerId: accountId,
            signingMethod,
            ledgerHdPath,
        });

        try {
            const output = await promptSignMessageOutput(command);
            return {
                accountId: output.accountId || accountId,
                publicKey: output.publicKey,
                signature: output.signature,
            };
        } finally {
            window.selector.ui.hideIframe();
        }
    };

    signDelegateActions = async ({
        delegateActions,
        network,
    }: {
        delegateActions: Array<{ actions: ConnectorAction[]; receiverId: string }>;
        network: string;
    }): Promise<{ signedDelegateActions: string[] }> => {
        const accountId = await getStoredAccountId(network);
        if (!accountId) throw new Error("Wallet not signed in");

        const signingMethod = await getStoredSigningMethod(network);
        const ledgerHdPath = signingMethod === "sign-with-ledger" ? await getStoredLedgerHdPath(network) : undefined;

        const signedDelegateActions: string[] = [];

        try {
            const total = delegateActions.length;
            for (let i = 0; i < delegateActions.length; i++) {
                const da = delegateActions[i];
                const command = buildMetaTransactionCommand({
                    signerId: accountId,
                    receiverId: da.receiverId,
                    actions: da.actions,
                    network: network as Network,
                    signingMethod,
                    ledgerHdPath,
                });

                const step = total > 1 ? `Step ${i + 1} of ${total}` : undefined;
                const base64Blob = await promptDelegateActionOutput(command, step);
                signedDelegateActions.push(base64Blob);
            }

            return { signedDelegateActions };
        } finally {
            window.selector.ui.hideIframe();
        }
    };
}

window.selector.ready(new NearCliWallet());
