import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };

  // headerObject = {
  //   'Content-Type':'application/json',
  //   'userName':''
  // };

  // httpOptions1 = {
  //   headers: new HttpHeaders(this.headerObject)
  // };



  constructor(private http: HttpClient) { }

  jwtHelper: JwtHelper = new JwtHelper()

  RegisterUser(user): Observable<any> {
    console.log(user);
    // debugger;
    return this.http.post('http://localhost:4000/Users/signUp', user, this.httpOptions);
  }


  authUser() {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false
  }

  LoginUser(user): Observable<any> {
    return this.http.post('http://localhost:4000/users/signIn', user, this.httpOptions);
  }


  getUserByUsername(uName: string) {
    return this.http.get<User[]>('http://localhost:8080/User/', {
      params: new HttpParams().set('userName', uName)
    })
  }

}

























    // addQuestion(Questions)  {




    //   let username= localStorage.getItem('username');

    //   this.headerObject.username =JSON.parse(username);
    //   console.log(this.httpOptions1.headers.get('username'));
    //   console.log('data men service' ,Questions);

    //   return this.http.post('http://localhost:8080/Questions/add', Questions,this.httpOptions1);



    //   }

    //   getQuestions() : Observable <Questions>{

    //   let username= JSON.parse(localStorage.getItem('username'));


    //     let params = new HttpParams().set("username",username);

    // return this.http.get<Questions>('http://localhost:8080/User/getQuestions', {params:params});


    //   }


    //   getQuestionById(id) : Observable <Questions>{


    //     let params = new HttpParams().set("id",id);

    //   return this.http.get<Questions>('http://localhost:8080/Questions/getQuestionById', {params:params});








