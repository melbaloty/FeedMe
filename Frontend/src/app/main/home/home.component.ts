import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurantService';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Restaurant } from 'src/app/models/restaurant';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  restaurants : Observable<Restaurant>;
  constructor(private router: Router, private utilsService: UtilsService,  private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getAllRestaurantByPosition();
  }

  getAllRestaurantByPosition(){
      navigator.geolocation.getCurrentPosition(resp => {
        const coords = [resp.coords.longitude, resp.coords.latitude];
        console.log(coords)
        this.restaurants = this.restaurantService.getNearestResturants(coords)
        
      }, () => {
        this.restaurants = this.restaurantService.getAllRestaurants()
      });
  }

  navigate(restaurant) {
    this.utilsService.insertInCach('restaurant',restaurant)
    this.router.navigate(['rest']);
    
  }

}
