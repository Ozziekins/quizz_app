import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [solidPlugin()],
	preview: {
		port: 3001,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/tests/setup.ts",
	},
});
