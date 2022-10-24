import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

   
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');

  await page.locator('[placeholder="Type to search"]').click();
  expect(page).not.toBeNull();
  expect(await page.title()).not.toBeNull();
  await page.locator('#searchBox').fill('eloquent');

  const firstRowCells = await page.$$('.ReactTable .rt-trgroup:nth-child(1) .rt-tf') //birden cok secim olacagi icin double $$
  let imgUrl = await firstRowCells[0].$('img');
  expect (await imgUrl.getAttribute('src')).not.toBeNull();

  expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');

  expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');

  expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');

  expect(await firstRowCells[3].innerText()).toBe('No Starch Press');

});