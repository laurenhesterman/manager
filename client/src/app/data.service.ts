import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private _http: HttpClient){}

  getAll(){
    
    return this._http.get('/product')
  }
  create(product){
   
    return this._http.post('/product', product)
  }
  delete(id){
    return this._http.delete(`/product/${id}`)
  }
  update(data, id){
    
    return this._http.put(`/product/${id}`, data)
  }
  findOne(id){
    console.log(id)
    return this._http.get(`/product/${id}`)
  }
  
 
  
}
