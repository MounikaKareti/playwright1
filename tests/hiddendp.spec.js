import{test,expect} from '@playwright/test'
test('hidden',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[placeholder='Username']").fill("Admin")
    await page.locator("input[placeholder='Password']").fill("admin123")
    await page.locator("button[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    const options = await page.$$("//div[@role='listbox']//div")
    for(const option of options){
       const value= await option.textContent()
       if(value.includes('Account Assistant')){
        await option.click()
        break;
       }
    }
    await page.waitForTimeout(3000);
})