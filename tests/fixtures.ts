import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';


type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page as Page);
    await lp.open();
    await use(lp);
  },

  dashboardPage: async ({ page }, use) => {
    const dp = new DashboardPage(page as Page);
    await use(dp);
  }
});

export { expect };



// import { TodoPage } from '../src/pages/TodoPage';

// type Fixtures = {
//   todoPage: TodoPage;
// };

// export const test = base.extend<Fixtures>({
//   todoPage: async ({ page }, use) => {
//     const tp = new TodoPage(page as Page);
//     await tp.open();
//     await use(tp);
//   }
// });

// export { expect };
