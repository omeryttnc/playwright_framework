import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://demoqa.com/automation-practice-form');
await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');

//print the element state

const firstName = await page.$('#firstName');
const sportsCheck = await page.$('#hobbies-checkbox-1');
const submitBtn = await page.$('#submit');

console.log(await firstName.isDisabled());
console.log(await firstName.isEnabled());
console.log(await firstName.isEditable());
console.log(await sportsCheck.isChecked());
console.log(await sportsCheck.isVisible());
console.log(await submitBtn.isHidden());
console.log(await submitBtn.isVisible());

//await expect(submitBtn).toBeEnabled();
//await expect(firstName).toBeEditable();
//await browser.close();
});