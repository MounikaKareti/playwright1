import{test,expect} from '@playwright/test'
// test.skip('Bootstrap',async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     page.on('browser',async dialog=>{
//         expect(dialog.type()).toContain("alert")
//         expect(dialog.message()).toContain("I am an alert box!")
//         await dialog.accept()

//     })
//     await page.locator("#alertBtn").click()
//     await page.waitForTimeout(3000)
    
// })
test('confirm',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
       // await dialog.accept()
        await dialog.dismiss()

    })
    await page.locator("#confirmBtn").click()
    await expect(await page.locator('#demo')).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
    
})
test.skip('prompt',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("john")
       // await dialog.dismiss()

    })
    await page.locator("#promptBtn").click()
    await expect(await page.locator('#demo')).toHaveText("Hello john! How are you today?")
    await page.waitForTimeout(3000)
    
})
