import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom",
		globals: true,
		setupFilesAfterEnv: ["./src/tests/setup.ts"],
	},
});
