import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { Restaurant } from '../models/restaurant';
import { PersistenceService, StorageType } from 'angular-persistence';


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })

    };

    getAllSelectedRestaurantMealsGroupedByType(restaurant) {
        return this.groupByToMap(restaurant.meals, 'type')

    }

    groupByToMap(arr, prop) {
        const map = new Map(Array.from(arr, obj => [obj[prop], []]));
        arr.forEach(obj => map.get(obj[prop]).push(obj));
        console.log(map)
        return map;

    }

    getNearestResturants(coords): Observable<Restaurant> {
        return this.http.post('http://localhost:4000/rests/nearest', coords) as Observable<Restaurant>;
    }

    getAllRestaurants(): Observable<Restaurant> {
        return this.http.get('http://localhost:4000/rests', this.httpOptions) as Observable<Restaurant>;
    }

  

}