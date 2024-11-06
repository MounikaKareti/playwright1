import{test,expect} from '@playwright/test'
test('Asserstions',async({page})=> {
    await page.goto("https://demo.nopcommerce.com/register")
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    // await expect(await page.locator("//strong[normalize-space()='Returning Customer']")).toHaveText("Returning Customer")
    // await expect(await page.locator("//strong[normalize-space()='Returning Customer']")).toContainText("Returning")
    await expect(await page.locator("select[name='DateOfBirthDay'] option")).toHaveCount(32)
    await expect(await page.locator("#register-button")).toHaveAttribute('type','submit')
    const value=await page.locator('#Email')
    await value.fill("mouni@123")
    await expect(value).toHaveValue("mouni@123")
})