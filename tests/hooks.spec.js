import{test,expect} from '@playwright/test'
let page;
test.beforeAll(async({browser})=>{
    page=await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('Mahidhar')
  await page.locator('#loginpassword').fill('mahi@1234')
  await page.locator("button[onclick='logIn()']").click()

})


test('home page',async()=>{
   const products= await page.$$('.hrefch')
   expect(products).toHaveLength(9)
})

test('add product to cart',async()=>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog =>{
       expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
       

    });
});

test.afterAll(async()=>{
    await page.locator('#logout2').click()
})
