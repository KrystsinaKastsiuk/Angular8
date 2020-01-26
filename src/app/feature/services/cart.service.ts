import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    addedProducts = [];

    addProduct(product: Product): void {
        this.addedProducts.push(product);
    }

    removeProduct(product: Product): void {
        let productIndex = this.addedProducts.findIndex(item => item === product);
        this.addedProducts.splice(productIndex, 1);
        console.log(`${product.name} was removed from cart`);
    }

    getAddedProducts(): Array<Product> {
        return this.addedProducts;
    }
}
