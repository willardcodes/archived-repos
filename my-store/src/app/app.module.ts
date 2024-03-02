import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavBarComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
