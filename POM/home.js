exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.productLinks="//div[@id='tbodyid']//div//h4/a";
        this.addToCart="//a[normalize-space()='Add to cart']";
        this.cartlink="#cartur";

    }
    async productList(productName){
    
       const products= await this.page.$$(this.productLinks);
       for(const product of products){
        if(productName===await product.textContent()){
            await product.click();
            break;
        }
       }
       await this.page.on('dialog',async dialog=>{
       if(dialog.message().includes("added")){
         await dialog.accept()
       }
       })

       await this.page.locator(this.addToCart).click()


    }

    async gotoCart(){
       await this.page.locator(this.cartlink).click()
    }

}