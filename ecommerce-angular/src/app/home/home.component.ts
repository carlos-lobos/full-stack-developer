import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin:boolean=false
  productos:any=[]

  constructor(
    private auth:AuthService,
    private productosService:ProductosService
  ) {
    //Observable
    this.getProductos()

    this.auth.getAuth()
    .subscribe(data=>{
      this.isLogin=data
    })
  }

  getProductos(){
    //Observable
    this.productosService.getAll()
    .subscribe((data:any)=>{
      console.log(data)
      if(data){
        this.productos=data
      }
    })
  }

  ngOnInit(): void {
  }

}
