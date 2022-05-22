import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authState = new BehaviorSubject(localStorage.getItem("login")?true:false)

  constructor() { }

  login(){
    this.authState.next(true)
    localStorage.setItem("login","true")
  }

  // retorna un Observable
  getAuth(){
    return this.authState
  }

  isAuthenticated(){
    return this.authState.value
  }

  logout(){
    this.authState.next(false)
    localStorage.removeItem("login")
  }
}
