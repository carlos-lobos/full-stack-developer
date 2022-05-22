import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(
    private auth:AuthService,
    private fb:FormBuilder
  ) {
    this.loginForm = this.fb.group({
      mail:["",[Validators.required,Validators.email]],
      passwd:["",[Validators.required]]
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.auth.login()
    window.location.href = "/";
  }

  ngOnInit(): void {
  }

}
