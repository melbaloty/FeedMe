import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })

  };


  constructor(private http: HttpClient) { }



  savePayment(payment) : Observable<any> {

    return this.http.post('http://localhost:4000/payment', payment, this.httpOptions );
}



}
