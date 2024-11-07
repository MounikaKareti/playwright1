import{test,expect, chromium} from '@playwright/test'
test('Handle pages',async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()

    const page=await context.pages()
    console.log("no of pages:",await page.length)

    await page1.goto("https://testautomationpractice.blogspot.com/")
    await expect(page1).toHaveTitle("Automation Testing Practice")
    await page1.waitForTimeout(3000)
    await page2.goto("https://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger")
    await expect(page2).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock")
})

test.only('multiple Handle',async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
   

    // const page=await context.pages()
    // console.log("no of pages:",await page.length)

    await page1.goto("https://testautomationpractice.blogspot.com/")
    await expect(page1).toHaveTitle("Automation Testing Practice")
    const pagePromise=await context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='merrymoonmary'").click()
   const newpage= pagePromise=await pagePromise
   await expect(newpage).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock")


    // await page1.waitForTimeout(3000)
    // await page2.goto("https://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger")
    // await expect(page2).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock")
})