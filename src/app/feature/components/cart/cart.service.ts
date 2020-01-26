import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    addedProducts = [];

    addProduct(product: ProductModel): void {
        this.addedProducts.push(product);
    }

    getAddedProducts(): Array<ProductModel> {
        return this.addedProducts;
    }

    removeProduct(product: ProductModel): void {
        const productIndex = this.addedProducts.findIndex(item => item === product);
        this.addedProducts.splice(productIndex, 1);
        console.log(`${product.name} was removed from cart`);
    }
}
