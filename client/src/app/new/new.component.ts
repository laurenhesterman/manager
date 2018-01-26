import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
// import {Router, ROUTER_PROVIDERS} from 'angular2/router'
// import {Router} from 'angular2/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors;
  product= {
    title:"",
    price: 0,
    image: ""
  }
  constructor(private _dataService: DataService, private _router: Router){}

  ngOnInit() {
  }    

  getAll(){

  }
  create() {
    console.log(this.product)
    let observable = this._dataService.create(this.product);
    observable.subscribe(data => {
      // console.log("Got data back!", data['errors'])
      if (data['errors']){
        this.errors = data
        console.log(data['errors'])
      }
      else {
        this._router.navigate(['/products']);
      }
      
      // this.newQuote = { title: "", description: "" }
    })

    this.getAll()
  }
}
