import { defineConfig } from '@playwright/test';

export default defineConfig({
 testDir: './tests',
 use: {
  baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  browserName: 'chromium',
  headless: false,
  screenshot: 'on',
  video: 'retain-on-failure',
 },
 retries: 1,
 reporter: [['html'], ['list']],
});