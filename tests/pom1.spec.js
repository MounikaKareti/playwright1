import{test,expect}from '@playwright/test'
import { loginpage } from '../POM1/loginpage'
import { homepage } from '../POM1/homepage';
test('pom',async({page})=>{
    //login
    let login=new loginpage(page);
   await login.gotologin();
   await login.login("Sujatha1","suji@12345");

   //home
   let home =new homepage(page);
   await home.productList("Nexus 6")
   await page.waitForTimeout(3000);
   await home.goToCart();
 
})