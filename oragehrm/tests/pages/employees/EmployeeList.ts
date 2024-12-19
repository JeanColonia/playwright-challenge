import { Page, Locator } from 'playwright/test';
import { BasePage } from '../Page';

export class EmployeeList extends BasePage {


 private readonly employeeListLink: Locator
 private readonly employeeNameBox: Locator
 private readonly searchBtn: Locator
 private readonly employeeResultsTable: Locator
 private readonly resultslistBox: Locator
 private readonly firstResultEditBtn: Locator


 constructor(page: Page) {
  super(page);

  this.employeeListLink = page.getByRole('link', { name: 'Employee List' });
  this.employeeNameBox = page.getByPlaceholder('Type for hints...').first();
  this.searchBtn = page.getByRole('button', { name: 'Search' });
  this.employeeResultsTable = page.locator('.oxd-table-body');
  this.resultslistBox = page.locator('//div[@role=\'listbox\']');

  this.firstResultEditBtn = page.locator('//div[@class=\'oxd-table-cell-actions\']/button[2]');


 }


 async addButton() {

 }



 async goToEmployeeList() {
  await this.click(this.employeeListLink);
 }

 async findEmployee(employeeName: string) {
  await this.click(this.employeeNameBox);
  await this.type(this.employeeNameBox, employeeName);
  await this.employeeNameBox.waitFor();

 }

 async searchEmployee() {
  await this.resultslistBox.waitFor();
  await this.employeeNameBox.waitFor();
  await this.click(this.searchBtn);
 }

 async validateResults() {
  await this.employeeResultsTable.waitFor();
  const employees = await this.employeeResultsTable.allInnerTexts();
  return employees;
 }

 async clickExpectedResult() {
  const employee = await this.employeeResultsTable.first();
  await this.click(employee);

 }

 async clickResult() {
  await this.firstResultEditBtn.waitFor();
  await this.click(this.firstResultEditBtn);
 }


}