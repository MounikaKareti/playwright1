import{test,expect} from '@playwright/test';
import path from 'path';
test('Login page',async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    //await page.screenshot({path:"tests/Screenshots1/"+Date.now()+'Homepage.png'});
    await page.screenshot({path:"tests/Screenshots1/"+Date.now()+'fullpage.png',fullpage:true})


   
})
test.only('element',async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({path:"tests/Screenshots1/"+Date.now()+'page.png'})
})


