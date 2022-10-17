import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://example.com/
  await page.goto('https://example.com/');

  // Click text=Example Domain
  await page.locator('text=Example Domain').click();
  await expect(page).toHaveURL('https://example.com/');
  
  await page.locator('text=Example Domain').click();
  //await expect(page).toBeVisible('https://example.com/');
  await expect(page).toHaveTitle('Example Domain');

  //const titel = page.locator('h1')
  //await expect(titel).toHaveText('fail',{timeout:3000})

  const element = await page.locator('h1')
  await expect(element).toBeVisible();
 
 await expect(page).toHaveText('boo');
  //await expect(page).toHaveCount(1);
  //this assertion is opposite of to be visible so you
  const nonExistingElement = await page.locator('h5')
  await expect(nonExistingElement).not.toBeVisible();
});
test("Screenshots", async({page})=>{
  //1.Step is load webste
  await page.goto('https://example.com/');
  //2. take screeenshot of full page
  await page.screenshot({ path: 'screenshot.png', fullPage: true})
 const element=await page.$('screenshot.png')
  await expect(element).toMatchSnapshot('screenshot.png');
}) //
test("Single element Screenshots", async({page})=>{
  //1.Steo is load webste
  await page.goto('https://example.com/');
  const element= await page.$('h1') //specific area
  await element.screenshot({ path: 'single_element_sceenshots.png'})
  //await expect(element).toHavescreenshot('single_element_sceenshots.png');
})