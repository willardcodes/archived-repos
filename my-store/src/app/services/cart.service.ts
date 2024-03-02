import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];
  cartOwner: string;
  cartTotal: number;

  constructor() {
    this.cartOwner = '';
    this.cartTotal = 0;
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  getCartOwner(): string {
    return this.cartOwner;
  }

  getCartTotal(): number {
    return this.cartTotal;
  }

  addProductToCart(product: Product): Product[] {
    if(this.productAlreadyAdded(product.id)) {
      const productIndex = this.cartProducts.findIndex(p => p.id === product.id);
      this.cartProducts[productIndex].quantity += product.quantity;
    } else {
      this.cartProducts.push(product);
    }
    return this.cartProducts;
  }

  updateQuantity(productId: number, newQuantity: number): Product[] {
    const productIndex = this.cartProducts.findIndex(p => p.id === productId);
    this.cartProducts[productIndex].quantity = newQuantity;
    return this.cartProducts;
  }

  setCartOwner(owner: string): void {
    this.cartOwner = owner;
  }

  setCartTotal(total: number): void {
    this.cartTotal = total;
  }

  removeFromCart(id: number): Product[] {
    const index = this.cartProducts.findIndex(p => p.id === id);
    this.cartProducts.splice(index, 1);
    return this.cartProducts;
  }

  clearCartProducts(): Product[] {
    this.cartProducts = [];
    return this.cartProducts;
  }

  private productAlreadyAdded(id: number): boolean {
    const isAdded = this.cartProducts.some(product => {
      if (product.id === id) return true;
      else return false;
    });
    return isAdded;
  }
}
