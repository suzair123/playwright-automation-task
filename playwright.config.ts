import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },

  // fullyParallel: true,
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] }
    // }
  ]
});
