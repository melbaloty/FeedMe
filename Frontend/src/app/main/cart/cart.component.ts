import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Meal } from 'src/app/models/meal';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router : Router ,private cartService : CartService) { }
  meals : Meal[];
  ngOnInit() {
    this.meals = this.cartService.getMealsFromCache();
    if(!this.meals){
      this.meals = []
    }
  }

  proceedToPayment(){
    this.cartService.addOrder(this.meals)
    this.router.navigate(['payment'])
  }

}
