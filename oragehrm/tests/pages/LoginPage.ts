import { Page, Locator } from 'playwright/test';
import { BasePage } from './Page';

export class LoginPage extends BasePage {

 private readonly usernameTextBox: Locator
 private readonly passwordTextBox: Locator
 private readonly loginButton: Locator
 private readonly dashboardTitle: string


 constructor(page: Page) {
  super(page);
  this.usernameTextBox = page.getByRole('textbox', { name: 'username' });
  this.passwordTextBox = page.getByRole('textbox', { name: 'password' });
  this.loginButton = page.getByRole('button', { name: 'Login' });
  this.dashboardTitle = '.oxd-topbar-header-breadcrumb-module';
 }

 async login(username: string, password: string) {
  await this.type(this.usernameTextBox, username);
  await this.type(this.passwordTextBox, password);
  await this.click(this.loginButton);
 }

 async getText() {
  const elementValue = await this.getElementText(this.dashboardTitle);
  return elementValue;
 }


}