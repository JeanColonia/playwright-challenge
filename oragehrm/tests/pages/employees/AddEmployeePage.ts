import { Page, Locator } from 'playwright/test';
import { BasePage } from '../Page';

export class AddEmployeePage extends BasePage {

 private readonly addBtn: Locator
 private readonly firstName: Locator
 private readonly middleName: Locator
 private readonly lastName: Locator
 //private readonly employeeId: Locator

 private readonly createDetailsCheckbox: Locator
 private readonly username: Locator
 private readonly password: Locator
 private readonly confirmPassword: Locator
 private readonly enableStatusCheckbox: Locator
 private readonly disableStatusCheckbox: Locator

 private readonly saveBtn: Locator

 //cambiar locator a Personal Details
 private readonly personalDetailsTitle: Locator
 private readonly employeeName: Locator


 //seaching previous created employee

 private readonly employeeListLink: Locator



 constructor(page: Page) {
  super(page);
  this.addBtn = page.locator('//button[normalize-space()=\'Add\']');
  this.firstName = page.getByRole('textbox', { name: 'First Name' });
  this.middleName = page.getByRole('textbox', { name: 'Middle Name' });
  this.lastName = page.getByRole('textbox', { name: 'Last Name' });


  this.createDetailsCheckbox = page.locator('//span[@class=\'oxd-switch-input oxd-switch-input--active --label-right\']');
  this.username = page.locator('(//input[@class=\'oxd-input oxd-input--active\'])[3]');
  this.password = page.locator('(//input[@type=\'password\'])[1]');
  this.confirmPassword = page.locator('(//input[@type=\'password\'])[2]');
  this.enableStatusCheckbox = page.locator('//label[normalize-space()=\'Enabled\']/span');
  this.disableStatusCheckbox = page.locator('(//label[normalize-space()=\'Disabled\']/span');

  this.saveBtn = page.getByRole('button', { name: 'Save' });

  this.employeeName = page.locator('//div[@class=\'orangehrm-edit-employee-name\']/h6');
  this.personalDetailsTitle = page.getByRole('heading', { name: 'Personal Details' });


  this.employeeListLink = page.getByText('Employee List');


 }


 async addButton() {
  await this.click(this.addBtn);
 }

 async partialAddEmployee(firstName_: string, middleName_: string, lastName_: string) {

  await this.type(this.firstName, firstName_);
  await this.type(this.middleName, middleName_);
  await this.type(this.lastName, lastName_);

  await this.click(this.saveBtn);

 }

 async addEmployee(firstName_: string, middleName_: string, lastName_: string, username_: string, password_: string, confirmPassword_: string) {
  await this.type(this.firstName, firstName_);
  await this.type(this.middleName, middleName_);
  await this.type(this.lastName, lastName_);

  await this.click(this.createDetailsCheckbox);

  await this.type(this.username, username_);
  await this.type(this.password, password_);
  await this.type(this.confirmPassword, confirmPassword_);

  await this.click(this.saveBtn);
 }



 async createLoginDetails(username_: string, password_: string, confirmPassword_: string) {
  await this.type(this.username, username_);
  await this.type(this.password, password_);
  await this.type(this.confirmPassword, confirmPassword_);
 }


 async validateEmployeeName() {
  await this.employeeName.waitFor();
  await this.employeeName.innerText();
 }

 async validatePersonalDetailsPage() {
  await this.personalDetailsTitle.waitFor();
  await this.personalDetailsTitle.innerText();
 }

 async goToEmployeeList() {
  await this.employeeListLink.waitFor();
  await this.click(this.employeeListLink);

 }


}