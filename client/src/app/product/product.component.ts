import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _dataService: DataService){}
  products;
  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._dataService.getAll();
    observable.subscribe(data => {    
      console.log("Got our products!", data),
      this.products = data
      
    });
  }
  deleteThis(id){
    console.log(id)
    let observable = this._dataService.delete(id);
    observable.subscribe(data => {
      console.log("deleting...")

    })
    this.getProductsFromService()
  } 
  
}
