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

Given('el usuario esta en la pagina de text input', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('el usuario ingresa su nombre', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('se espera ver el boton cambie al nombre ingresado', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});