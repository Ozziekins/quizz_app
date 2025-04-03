import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	timeout: 30_000,
	retries: 0,
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "only-on-failure",
		baseURL: process.env.BASE_URL || "http://localhost:3000",
	},
});
