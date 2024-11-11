import{test,expect}from '@playwright/test'

// const testData={
//     username:'testUser',
//     password:'Test@123',
//     product:'Laptop'
// };

test.describe('E-commerce website',()=>{
    test('User Login',async({page})=>{
        await page.goto("https://www.website.com/sign-in/?source=SC&country=IN")
        await page.locator("#username").fill('mounika')
        await page.locator("#password").fill("mouni@1234")
        await page.locator("(//button[normalize-space()='Log In'])[1]").click()

       await expect(page).toHaveURL("https://www.website.com/sign-in/?source=SC&country=IN")
       await expect(page).toHaveTitle("Log in | Website.com")
    })
    //test for product saerch and add to cart
    test('search product and add to cart',async({page})=>{
        await page.goto("https://www.website.com/sign-in/?source=SC&country=IN")
        await page.locator("").fill("")
    })

    
})