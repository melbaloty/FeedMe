import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, Data } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurantService';
import { Restaurant } from 'src/app/models/restaurant';
import { CartService } from 'src/app/services/cart.service';
import { Meal } from 'src/app/models/meal';
import { PersistenceService } from 'angular-persistence';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-restdetails',
  templateUrl: `./restdetails.component.html`

})
export class RestdetailsComponent implements OnInit {
  // restDetails : Restaurant = {
  //   name: "McDonald's",
  //   desc: "Rest 1 Desc",
  //   cuisine: "Americain",
  //   meals: [{ name: "meal1", type: "beef", price: 11 }, { name: "meal2", type: "vegan", price: 10 }, { name: "meal3", type: "vegetarian", price: 11 }
  //     , { name: "meal4", type: "beef", price: 15 }, { name: "meal5", type: "beef", price: 10 }],
  //   address: "1234 Some St San Francisco, CA 94102, US 1.800.123.4567",
  //   phone: "641-334-8722",
  //   image: "1"
  // }
  constructor(private utilsService: UtilsService, private restaurantService: RestaurantService, private toastr: ToastrService) { }
  mealsGroupedByType;
  restaurant: Restaurant
  ngOnInit() {
    this.restaurant = this.utilsService.getFromCache('restaurant')
    if (this.restaurant) {
      this.mealsGroupedByType = this.restaurantService.
        getAllSelectedRestaurantMealsGroupedByType(this.restaurant)
    }

  }
  addMeal(meal: Meal) {
    let meals = this.utilsService.getFromCache('meal');
    let newMeals: Meal[] = [];
    if (meals) {
      newMeals = [...meals, meal];
    } else {
      newMeals = [meal]
    }
    this.utilsService.insertInCach('meal', newMeals)
    this.toastr.success(meal.name + " to your cart")
  }
}

