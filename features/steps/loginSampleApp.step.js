const { 
    Given, 
    When, 
    Then, 
    After, 
    AfterAll, 
    Before, 
    BeforeAll,
    setDefaultTimeout, 
 } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

setDefaultTimeout(60 * 1000);

Before( async () => {
    page = await browser.newPage();
});

BeforeAll( async () => {
    browser =  await chromium.launch({ headless: false });
});

After( async () => {
    await page.close();
});

AfterAll( async () => {
    await browser.close();
});

Given('el usuario esta en la pagina de inicio de sesion', async function () {
    await page.goto('http://uitestingplayground.com/');
    await page.getByRole('link', { name: 'Sample App' }).click();
    await page.waitForLoadState('domcontentloaded');
});

When('el usuario ingresa su nombre de usuario y contraseña valida', async function () {
    await page.getByPlaceholder('User Name').fill('pepito');
    await page.locator('input[name="Password"]').fill('pwd');
    await page.getByRole('button', { name: 'Log In' }).click();
});

Then('se espera ver un mensaje de exito en color verde', async function () {
    const successMessage = await page.locator('#loginstatus');
    await expect(successMessage).toHaveClass('text-success');
    await expect(successMessage).toHaveCSS('color', 'rgb(40, 167, 69)');
});
