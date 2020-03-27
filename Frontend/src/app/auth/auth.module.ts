import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniqueUsernameValidatorDirective } from '../shared/unique-username-validator.directive';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
  CommonModule,
    FormsModule,
    //ShowHidePasswordModule,
    //UniqueUsernameValidatorDirective,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent}
    ])
  ]
})
export class AuthModule { }
