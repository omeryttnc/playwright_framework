const { chromium } = require('@playwright/test');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');


const loginValues = [{
   userName:"Ali",
   password:"1234"
   
},
{
    userName:"Veli",
    password:"5678"
    
 },
 {
    userName:"Hamdi",
    password:"9012"
    
 }]

 describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage  = null;
    let loginPage  = null;




beforeAll( async ()=>{
    // we launch browser and navigate to the loginpage
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

afterAll( async ()=>{
    // closing browser
    await context.close();
    await browser.close();
});


loginValues.forEach(data=>{

it(`Should be able to login ${data.userName}`, async() => {
    await loginPage.login(data.userName,data.password);
    expect(await page.title()).not.toBeNull();
 })
})
})