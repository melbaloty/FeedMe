import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PaymentCardComponent } from '../payment-card/payment-card.component';
import { PaymentConfirmationComponent } from './../payment-confirmation/payment-confirmation.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path:"paymentCard" , component:PaymentCardComponent},
  {path:"confirmed" , component:PaymentConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthRoutingModule {}
