import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  user : User
  
 

  title = 'FeedMe';

  constructor(private router: Router, private authService: AuthService, private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.user = this.utilsService.getFromCache('user')
    console.log(this.user)
  }

  logout() {

    localStorage.removeItem('token')
    this.utilsService.clearAllFromCache()
    this.router.navigate(['login'])
  }


}

