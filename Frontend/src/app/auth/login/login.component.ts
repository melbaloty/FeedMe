import { Component, OnInit, ElementRef } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { AfterViewInit, ViewChild, Renderer2 } from "@angular/core";
import { User } from "../../models/user";
import { PersistenceService } from 'angular-persistence';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  msg;
  // @ViewChild('label') label;

  // @ViewChild('label') el: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private rd: Renderer2,
    private utilsService: UtilsService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ["", Validators.required],

      password: ["", Validators.required]
    });
  }

  login() {
    this.submitted = true;

    const user = {
      email: this.angForm.value.email,
      password: this.angForm.value.password
    };
    console.log(user)
    this.service.LoginUser(user).subscribe(data => {
      console.log(">>> login response: ", data.token);
      if (data != null) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          this.utilsService.insertInCach('user', data.user)
          this.router.navigate(["home"]);
        }
      }
    },
    error => {
      console.log(error)
      this.msg = "User not found";
    });
    
  }
}
