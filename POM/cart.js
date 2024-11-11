exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.productList="//tbody[@id='tbodyid']//tr";
        this.productNameLocator="td:nth-child(2)"
        this.productPriceLocator="td:nth-child(3)";
        this.totalPriceLocator="#totalp";
        this.placeOrderButton="//button[normalize-space()='Place Order']"
        this.nameField="#name";
        this.countryField="#country";
        this.cityField="#city";
        this.cardField="#card";
        this.monthField="#month";
        this.yearField="#year";
        this.purchaseButton="button[onclick='purchaseOrder()']";
    }

    async addToCartProduct(productName){
       const products= await this.page.$$(this.productList);
       let productFound=false;
       let productPrice=0;
       for(const product of products){
        const name=await product.$eval(this.productNameLocator,el =>el.textContent.trim());
        console.log(`checking product: ${name}`);
        
        //console.log(await product.textContent())
        if(productName=== name){
            productFound= true;
             productPrice=parseFloat(await product.$eval(this.productPriceLocator,el => el.textContent.trim()));
            console.log(`product price for ${productName}: ${productPrice}`);
            break;
        }
       }
       if(!productFound){
        console.log(`product ${productName} not found in cart.`);
        return false;
       }

       const totalPrice=parseFloat(await this.page.locator(this.totalPriceLocator).textContent());
       console.log(`Total price in cart:${totalPrice}`);

       if(totalPrice !== productPrice){
        throw new Error(`Total price(${totalPrice}) does not match the product price (${productPrice})`)
       }
       return true;
    }

    async placeOdrer(){
        await this.page.locator(this.placeOrderButton).click();
        await this.page.locator(this.nameField).fill("Mouni");
        await this.page.locator(this.countryField).fill('India');
        await this.page.locator(this.cityField).fill("skonda");
        await this.page.locator(this.cardField).fill("1234567812345678")
        await this.page.locator(this.monthField).fill("12");
        await this.page.locator(this.yearField).fill("2025");
        await this.page.locator(this.purchaseButton).click();
     
        await this.page.waitForSelector("//button[normalize-space()='OK']")
        console.log("order placed successfully");



    }
}

