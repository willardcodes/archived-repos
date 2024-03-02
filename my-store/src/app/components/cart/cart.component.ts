import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  total: number;
  name: string;
  address: string;
  creditCard: string;

  constructor(private cartService: CartService, private router: Router) {
    this.total = 0;
    this.name = '';
    this.address = '';
    this.creditCard = '';
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.total = this.calculateCartTotal();
    console.log(this.cartProducts);
  }

  updateCart(product: Product): void {
    this.total = this.calculateCartTotal();
    this.cartService.setCartTotal(this.total);
    this.cartService.updateQuantity(product.id, product.quantity);
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
    this.total = this.calculateCartTotal();
  }

  onSubmit(): void {
    this.cartService.setCartOwner(this.name);
    this.cartService.setCartTotal(this.total);
    this.router.navigate(['/confirmation']);
  }

  private calculateCartTotal(): number {
    let cartTotal = 0;
    for (let product of this.cartProducts) {
      cartTotal += product.price * product.quantity;
    }
    return cartTotal;
  }

}
