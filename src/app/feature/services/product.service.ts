import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
    products = [
        {name: 'Mulokri-LKR132', category: 'Laptop', price: 378, originCountry: 'France', description: 'Laptop of Samsung corporation', isAvailable: false},
        {name: 'Huawei 220', category: 'Mobile', price: 482, originCountry: 'China', description: 'Mobile of China corporation', isAvailable: true},
        {name: 'LRT-0943', category: 'TV', price: 768, originCountry: 'China', description: 'TV of LG corporation', isAvailable: true}
    ];

    getProducts(): Array<Product> {
        return this.products;
    }
}
