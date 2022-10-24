import { test, expect } from '@playwright/test';

test ('Assetions Demo', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/');
    //await page.pause() //duraklama ekledik
    //Assertions
    //check element present or not
    //await expect(page.locator('text=The Kitchen')).toHaveCount(1);
   
    if ( await page.$('text=The Kitchen')){
    await page.locator('text=The Kitchen').click(); //eger element mevcut ise if bloguna gec tikla
   }

   //check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect(page.locator('text=The Kitchen')).not.toBeHidden();
   
    // after fail add soft assertions

    //check element enable or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //do not terminate test execution mark the test as failed
   // await expect.soft(page.locator('text=The Kitchen')).toHaveText('XYZ')

    // Check element Text matches value or not
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD');
    
    // Assert Element attribute  ID. type
    //await expect(page).locator('text=The Kitchen').toHaveAttribute('class' , /.*css-dpmy2a/)
    //await expect(page).locator('text=The Kitchen').toHaveClass( /.*css-dpmy2a/)
    //<h1 class="chakra-heading css-dpmy2a">The Kitchen</h1>
    
    //Check Url of the page
    await expect(page).toHaveURL('https://kitchen.applitools.com/');

     //Check Title of the page
    //await expect (page.toHaveTitle('The Kitchen'));

    //Check Page matches screenshot Visual Validation
   // await expect(page).toHaveScreenshot();

})

