import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, expect, Page } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;
let loginPage: LoginPage;

Before(async () => {
  browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
  bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
  page = await bCtx.newPage();

  loginPage = new LoginPage(page);
});


Given('user open browser and navigate to orange web {string}', async function (string) {

  await loginPage.navigateTo(string);
});


When('enters {string} and {string} and press login', async function (string, string2) {
  await loginPage.login(string, string2);

});

Then('should be redirected to the dashboard page and shows {string}', async function (string) {

  const dashboardTitle = await loginPage.getText();

  await expect(dashboardTitle).toContain(string);

});


After(async () => {

});
