import Product from "../entity/product";

export default class ProductService {
    static increatePricePercentage(products: Product[], percentage: number): Product[] {
        products.forEach(product => {
            const newPrice = product.price * (1 + (percentage / 100));
            product.changePrice(newPrice);
        });
        return products;
    } 
}