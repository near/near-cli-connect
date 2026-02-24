import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	plugins: [nodePolyfills()],
	build: {
		emptyOutDir: false,
		outDir: "dist",
		rollupOptions: {
			input: "./src/index.ts",
			output: {
				entryFileNames: "near-cli.js",
				assetFileNames: "near-cli.js",
				format: "iife",
			},
		},
	},
});
