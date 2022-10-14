const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test('Browser context playwrigt test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();
});




test('page playwrigt test', async ({ page }) => {


    await page.goto('https://google.com');
    console.log(await page.title());

    expect(await page.title()).toBe('Google');
    await expect(page).toHaveTitle('Google');
});

