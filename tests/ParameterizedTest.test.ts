const { default: test } = require("@playwright/test");

import { expect } from "@playwright/test";
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
computerData.forEach(data => {

    test(`Parameterized test ${data.name}`, async ({ page }) => {
        await page.goto("https://computer-database.gatling.io/computers");
        await page.click("#add");
        await page.fill("#name", data.name);
        await page.selectOption("#company", {
            label: data.company
        });
        await page.click("input[type='submit']");
        expect(page.locator("div.alert-message.warning")).toContainText("DDone !  ")
    })
})