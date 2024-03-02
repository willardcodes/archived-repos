import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  readonly quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity: number;
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor() {
    this.product = new Product();
    this.selectedQuantity = 1;
   }

  ngOnInit(): void { }

  onSubmit(): void {
    this.product.quantity = this.selectedQuantity;
    this.addToCart.emit(this.product);
  }

}
