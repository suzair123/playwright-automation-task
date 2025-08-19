import { test, expect } from './fixtures';
import type { LoginPage } from '../src/pages/LoginPage';
import type { DashboardPage } from '../src/pages/DashboardPage';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.describe('OrangeHRM Dashboard Tests', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Initialize page objects
    loginPage = new (await import('../src/pages/LoginPage')).LoginPage(page);
    dashboardPage = new (await import('../src/pages/DashboardPage')).DashboardPage(page);

    // Login once
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');
  });

  test('verify dashboard search input is visible', async () => {
    // here we are verifying dashboard is displayed successfully
    await dashboardPage.verifySearchVisible();
  });

});
