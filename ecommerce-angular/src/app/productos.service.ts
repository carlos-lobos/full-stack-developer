import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get("https://jsonfy.com/items")
  }

  getById(id:string){
    return this.http.get("https://jsonfy.com/items/"+id)
  }
}
