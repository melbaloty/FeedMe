import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  goToHome(event){
    this.router.navigate(['/home']);

  }
}
