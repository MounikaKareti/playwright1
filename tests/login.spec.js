import{test,expect} from '@playwright/test'
test("Login",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill("mounika")
    await page.locator('#email').fill("mounika@gmail.com")
  
})