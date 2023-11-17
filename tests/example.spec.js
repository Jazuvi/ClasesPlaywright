// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Testing navbar', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test.describe('Testeando tabla', () => {

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('verificar que la palabra "enable" este presente', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText(/enables/)).toBeVisible();
  });
})