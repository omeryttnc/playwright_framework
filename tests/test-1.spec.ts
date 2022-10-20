import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://computer-database.gatling.io/computers');

  await page.getByRole('link', { name: 'Add a new computer' }).click();

  await page.getByLabel('Computer name').fill('abc');

  await page.getByRole('combobox', { name: 'Company' }).selectOption('1');

  await page.getByRole('button', { name: 'Create this computer' }).click();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers');

  await page.getByText('Done ! Computer abc has been created').click();

});