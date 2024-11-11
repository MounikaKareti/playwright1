import{test,expect} from '@playwright/test'
//single
test('upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='singleFileInput']").setInputFiles('tests\\upload_files1\\test1.pdf');
    await page.waitForTimeout(4000)
})

test.only('multiple',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(['tests\\upload_files1\\test1.pdf','tests\\upload_files1\\test2.pdf'])
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([])
    // expect(await page.locator("//*[@id=multipleFilesStatus']/text()[2]")).toHaveText("test1.pdf, Size: 0 bytes, Type: application/pdf")
    // expect(await page.locator('//*[@id="multipleFilesStatus"]/text()[3]')).toHaveText("test2.pdf, Size: 0 bytes, Type: application/pdf")
    
})