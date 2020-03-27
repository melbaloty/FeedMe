import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../models/meal';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { UtilsService } from './utils.service';
import {Subscription} from 'rxjs/Subscription'


@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {
 
  constructor(private http: HttpClient, private authService: AuthService, private utilsService: UtilsService) { }

  subs : Subscription
  getMealsFromCache(){
    return this.utilsService.getFromCache('meal') 
  }
  addOrder(meals) {
   this.subs = this.http.post('http://localhost:4000/orders', {meals: meals}).subscribe((updatedUser: User) => {
      console.log("howa daaaaaaaaah",updatedUser)
      this.utilsService.updateCache('user', updatedUser)
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
