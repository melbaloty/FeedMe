import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Interceptor } from './interceptors/Interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PersistenceModule } from 'angular-persistence';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    PersistenceModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./main/main.module').then(r => r.MainModule), canActivate: [AuthGuard] },
      { path: '', loadChildren: () => import('./auth/auth.module').then(r => r.AuthModule) },
      { path: '**', redirectTo: 'home' }]
    )],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
