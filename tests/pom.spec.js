import{test,expect} from '@playwright/test'
import { LoginPage } from '../POM/login'
import { HomePage } from '../POM/home'
 import { CartPage } from '../POM/cart'

test('POM',async({page})=>{
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('mahidhar','mahi@1234')
 

    const home=new HomePage(page)
    await home.productList("Iphone 6 32gb")
    await page.waitForTimeout(3000)
    await home.gotoCart()

    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status= await cart.addToCartProduct("Iphone 6 32gb")
     expect(await status).toBe(true)
     await cart.placeOdrer();
     await expect(page.locator("//button[normalize-space()='OK']")).toBeVisible();
 

})

   
