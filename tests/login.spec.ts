import { test, expect } from './fixtures';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.describe('OrangeHRM Dashboard Tests', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Initialize page objects
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    // Login once
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');
  });

  test('verify dashboard search input is visible', async () => {
    // here we are verifying dashboard is displayed successfully
    await dashboardPage.verifySearchVisible();
  });

});
