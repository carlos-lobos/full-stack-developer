import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto:any=[]

  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")

    //Observable
    if(id){
      console.log(id)
      this.getProducto(id)
    }
  }

  getProducto(id:string){
    //Observable
    this.productosService.getById(id)
    .subscribe((data:any)=>{
      console.log(data)
      if(data){
        this.producto=data
      }
    })
  }

  ngOnInit(): void {
  }

}
