# near-cli-connect

A browser-embeddable wallet connector that bridges NEAR dApps to [near-cli-rs](https://near.cli.rs). Instead of signing transactions in the browser, it generates CLI commands for users to run in their terminal and then verifies the resulting transactions on-chain.

## Demo

<video src="https://raw.githubusercontent.com/near/near-cli-connect/main/assets/demo.mp4" controls width="100%"></video>

## How it works

1. The dApp loads `dist/near-cli.js` inside an iframe via [near-connect](https://github.com/azbang/near-connect)
2. When a transaction is requested, the widget renders the corresponding `near-cli-rs`
3. The user copies the command, runs it in their terminal, and pastes back the transaction hash
4. The widget verifies the transaction on-chain via RPC and returns the result to the dApp

## Development

```bash
npm install
npm run build
```

### Available scripts

| Script              | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run build`     | Bundle `src/` into `dist/near-cli.js` via Vite |
| `npm run lint`      | Run ESLint on source files                     |
| `npm run fmt`       | Format source files with Prettier              |
| `npm run fmt:check` | Check formatting without writing               |
