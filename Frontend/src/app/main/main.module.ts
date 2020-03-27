import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { RestdetailsComponent } from './restaurantDetails/restdetails.component';
import { PaymentCardComponent } from '../payment-card/payment-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PaymentConfirmationComponent } from './../payment-confirmation/payment-confirmation.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    RestdetailsComponent,
    PaymentCardComponent,
    PaymentConfirmationComponent,
    CartComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'rest', component: RestdetailsComponent },
          { path: 'cart', component: CartComponent },
          { path: 'payment', component: PaymentCardComponent },
          { path: 'confirmed', component: PaymentConfirmationComponent }
        ]
      }])
  ],
})

export class MainModule { }
