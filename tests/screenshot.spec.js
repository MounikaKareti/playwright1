import{test,expect} from '@playwright/test'
test('screen',async({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.waitForSelector('//*[@id="content"]/div[2]/div[1]/div')
    // await page.screenshot({path:`tests\Screenshots1/${Date.now()}_Homepage.png`})
    // await page.screenshot({path:`testsScreenshots1/${Date.now()}_fullpage.png`,fullPage:true})
     await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:`testsScreenshots1/${Date.now()}_macbook.png`})
})