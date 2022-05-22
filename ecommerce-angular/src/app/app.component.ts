import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ecommerce'

  isLogin:boolean=false

  constructor(
    private auth:AuthService
  ) {
    this.auth.getAuth()
    .subscribe(data=>{
      this.isLogin=data
    })
  }

  salir(){
    this.auth.logout()

  }

}
