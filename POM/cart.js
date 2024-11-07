exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.productList="//tbody[@id='tbodyid']//tr//td[2]";
    }

    async addToCartProduct(productName){
       const products= await this.page.$$(this.productList);
       for(const product of products){
        console.log(await product.textContent())
        if(productName===await product.textContent()){
            return true;
            break;
        }
       }
    }
}