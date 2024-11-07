import{test,expect} from '@playwright/test'
import { LoginPage } from '../POM/login'
import { HomePage } from '../POM/home'
 import { CartPage } from '../POM/cart'

test('POM',async({page})=>{
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('mahidhar','mahi@1234')
 

    const home=new HomePage(page)
    await home.productList("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart()

    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status= await cart.addToCartProduct("Nexus 6")
     expect(await status).toBe(true)


})

   
