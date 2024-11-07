import{test,expect} from '@playwright/test'
test('Locating Multiple',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Mahidhar')
    await page.locator("//input[@id='loginpassword']").fill('mahi@1234')
    await page.locator("button[onclick='logIn()']").click()
    const logout=await page.locator("#logout2")
//     await page.waitForSelector("//div[@id='tbodyid']//h4//a")
//    const links= await page.$$("//div[@id='tbodyid']//h4//a")
//    for(const link of links){
//     const text= await link.textContent()
//     console.log(text)
//    }
    
})