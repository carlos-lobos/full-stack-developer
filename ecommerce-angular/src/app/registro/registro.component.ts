import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  regForm:FormGroup

  constructor(
    private auth:AuthService,
    private fb:FormBuilder
  ) {
    this.regForm = this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:["",[]],
      mail:["",[Validators.required,Validators.email]],
      passwd:["",[Validators.required,Validators.minLength(6),,Validators.maxLength(10)]]
    })
  }

  registrarse(){
    console.log(this.regForm.value)
    this.auth.login()
    window.location.href = "/";
  }

  ngOnInit(): void {
  }

}
