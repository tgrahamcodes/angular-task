const { defineConfig, devices } = require('@playwright/test');
const { nxE2EPreset } = require('@nx/playwright/preset');
const { workspaceRoot } = require('@nx/devkit');

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

module.exports = defineConfig({
    ...nxE2EPreset(__filename, { testDir: './src' }),

    use: {
        baseURL,
        trace: 'on-first-retry',
        timeout: 60000,
        headless: true,
    },

    webServer: {
        command: 'npx nx serve angular-task',
        url: 'http://localhost:4200',
        reuseExistingServer: !process.env.CI,
        cwd: workspaceRoot,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});