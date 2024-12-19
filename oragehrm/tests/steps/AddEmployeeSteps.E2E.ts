import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/employees/AddEmployeePage';
import { EmployeeList } from '../pages/employees/EmployeeList';

import credentials from '../data/session/credentials.json';
import employee from '../data/employees/employee.json';

import randomValue from '../../helpers/randomValue';
import { AddEmployeePageE2E } from '../pages/employees/AddEmployeePage.E2E';


let browser: Browser;
let bCtx: BrowserContext;
let page: Page;
let loginPage: LoginPage;
let addEmployePage: AddEmployeePage;
let employeeList: EmployeeList;
let addEmployee2E2: AddEmployeePageE2E;

const firstName_ = randomValue(employee.firstName_);
const middleName_ = employee.middleName_;
const lastName_ = employee.middleName_;
const username_ = randomValue(employee.username_);
const password_ = randomValue(employee.password_);
const confirmPassword_ = password_;


Before(async function () {
 browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
 bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
 page = await bCtx.newPage();
 loginPage = new LoginPage(page);
 addEmployePage = new AddEmployeePage(page);
 employeeList = new EmployeeList(page);

 addEmployee2E2 = new AddEmployeePageE2E(page);

 await loginPage.navigateTo("/auth/login");
 await loginPage.login(credentials.username, credentials.password);
});



Given('user is located in page Add Employee', async function () {

 await addEmployePage.navigateTo("/pim/addEmployee");

});



When('inserts general information, login details and clicks on save button', async function () {
 await addEmployePage.addEmployee(firstName_, middleName_, lastName_, username_, password_, confirmPassword_);


});



Then('registered employee should be present in Persona Details page with corresponding information', async function () {

 await addEmployePage.validatePersonalDetailsPage();

});


Then('should be present in employee list page', async function () {
 await employeeList.goToEmployeeList();
 await employeeList.findEmployee(firstName_);
 await page.waitForTimeout(2500);
 await employeeList.searchEmployee();
});


