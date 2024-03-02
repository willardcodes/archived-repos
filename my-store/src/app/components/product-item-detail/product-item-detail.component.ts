import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  readonly quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity: number;
  productId: number;
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = new Product();
    this.productId = 0;
    this.selectedQuantity = 1;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
    });
    this.productService.getProducts().subscribe(data => {
      this.product = data.find(p => p.id === this.productId) as Product;
    });
  }

  onSubmit(): void {
    this.product.quantity = this.selectedQuantity;
    this.cartService.addProductToCart(this.product);
    alert(`${this.product.name} was added to cart!`)
  }

}
