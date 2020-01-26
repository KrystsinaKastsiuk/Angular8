import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../../models/product.model';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

  onBuy(product: Product): void {
    this.cartService.addProduct(product);
    console.log(`${product.name} was purchased`);
  }

  constructor( private cartService: CartService ) {}

  ngOnInit() {}

}
