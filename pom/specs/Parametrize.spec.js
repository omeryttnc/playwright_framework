const { default: test } = require("@playwright/test");

import { expect } from "@playwright/test";
//Parametrize Test;aynı testin farklı parametrelerle tekrar tekrar çalıştırılması ilkesi ile çalışır
//Testte kullanılmak istenilen farklı parametreler bır Array içine konulur.
const computerData = [{
    name: "Comp A",
    company: "Tandy Corporation"
},
{
    name: "Comp B",
    company: "Commodore International"
},
{
    name: "Comp C",
    company: "Thinking Machines"
},
{
    name: "Comp D",
    company: "Nokia"
}
]
//Test bir foreach içerisinde çalıştırılır.
computerData.forEach(data=>{

//Test ismi mutlaka uniq olmalıdır.Degiştilen alanlar uygun şekilde doldurulmalıdır.
    test(`Parameterized test ${data.name}`, async ({ page }) => {
   // test(`Parameterized test `+data.name, async ({ page }) => {
        
        await page.goto("https://computer-database.gatling.io/computers");
        await page.click("#add");
        await page.fill("#name", data.name);
        await page.selectOption("#company", {
            label: data.company
        });
        await page.click("input[type='submit']");
        
       
          expect(page.locator("div.alert-message.warning")).toContainText("Done")
    }) 
})

/*Reporters
Test run edildiğinde 4 çeşit rapor alınabilir
***Rapor tercihimizi playwright.config.js de 
reporter: 'line',
reporter: 'list',
reporter: 'dot',
reporter: 'json',
reporter: 'html',
yazarak degiştirebiliriz. Ya da;

Terminalde
npx playwright test --reporter=line
npx playwright test --reporter=list
npx playwright test --reporter=dot
npx playwright test --reporter=json
npx playwright test --reporter=html    yazılabilirç



*/

