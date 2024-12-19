import { Before, Given, When, Then, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, expect, Page } from 'playwright/test';
import { AddEmployeePage } from '../pages/employees/AddEmployeePage';
import { LoginPage } from '../pages/LoginPage';


import credentials from '../data/session/credentials.json';
import employee from '../data/employees/employee.json';

import randomValue from '../../helpers/randomValue';
import { EmployeeList } from '../pages/employees/EmployeeList';


let browser: Browser;
let bCtx: BrowserContext;
let page: Page;
let loginPage: LoginPage;
let addEmployePage: AddEmployeePage;
let employeeList: EmployeeList;

const imagePath_ = employee.imagePath;
const firstName_ = randomValue(employee.firstName_);
const middleName_ = employee.middleName_;
const lastName_ = employee.middleName_;
const username_ = randomValue(employee.username_);
const password_ = randomValue(employee.password_);
const confirmPassword_ = password_;

BeforeAll(async () => {
 browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
 bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
 page = await bCtx.newPage();
 loginPage = new LoginPage(page);
 addEmployePage = new AddEmployeePage(page);
 employeeList = new EmployeeList(page);

 await loginPage.navigateTo("/auth/login");
 await loginPage.login(credentials.username, credentials.password);
});


Given('the user is on the PIM page and clicks the {string} button', async function (string) {
 await addEmployePage.navigateTo("/pim/viewEmployeeList");
 await addEmployePage.addButton();
});


When('provides the basic candidate information, uploads the resume, additional details and  clicks the {string} button', async function (string) {

 await addEmployePage.addEmployee(imagePath_, firstName_, middleName_, lastName_, username_, password_, confirmPassword_);
 // await addEmployePage.partialAddEmployee("JC Franklin", "Franklin", "Colonia");


});

Then('the screen should show the previously entered candidate information', async function () {

 console.log(firstName_);

}
);

AfterAll(async function () {
 await page.close();
 await bCtx.close();
 await browser.close();
})