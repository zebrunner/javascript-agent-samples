const { expect, test } = require('@playwright/test');
const { CurrentTest, zebrunner } = require('@zebrunner/javascript-agent-playwright');

test.describe("Basic reporting test", () => {

  test('has title [@small, @fast]', async ({ page }) => {
    zebrunner.testCaseKey("DEF-1");
    CurrentTest.setMaintainer('admin');

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link [@medium, @fast]', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

})
