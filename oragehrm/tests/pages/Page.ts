import { Locator, Page, expect } from '@playwright/test';
import config from '../../../playwright.config';
export class BasePage {
 constructor(protected page: Page) { }

 async navigateTo(path: string) {
  const baseURL = config.use?.baseURL;
  await this.page.goto(baseURL + path, { timeout: 10000 });
 }

 async getTitle() {

  return this.page.title();
 }

 async click(selector: Locator) {
  await selector.waitFor({ state: 'visible', timeout: 10000 });
  await selector.click();
 }

 async type(selector: Locator, text: string) {
  await selector.waitFor({ state: 'visible', timeout: 10000 });
  await selector.fill(text);
 }

 async validateVisibleText(value: string) {
  await expect(this.page.getByText(value)).toBeVisible();
 }

 async getElementText(identifier: string) {
  const elementValue = await this.page.locator(identifier);
  return await elementValue.innerText();
 }

}