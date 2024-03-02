import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string;
  total: number;

  constructor(private router: Router, private cartService: CartService) {
    this.name = '';
    this.total = 0;
  }

  ngOnInit(): void {
    this.name = this.cartService.getCartOwner();
    this.total = this.cartService.getCartTotal();
  }

  returnToProductList(): void {
    this.cartService.clearCartProducts();
    this.router.navigate(['']);
  }
}
