import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: ProductModel;

  constructor( private cartService: CartService ) {}

  ngOnInit() {}

  onBuy(product: ProductModel): void {
    this.cartService.addProduct(product);
    console.log(`${product.name} was purchased`);
  }
}
