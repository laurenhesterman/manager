import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors : any;
  new_product =
  { "title" : "", "price" : 0, "image" : ""};
  
  constructor(private _dataService: DataService, private _req: ActivatedRoute, private _router: Router){}

  ngOnInit() {
    this._req.params.subscribe(data=>{
      console.log(data.id)
      this.getOne(data.id);
      
     
    })
    // this.new_product = this._req.params
     
  }

  getOne(id){
    let observable = this._dataService.findOne(id);
  
    console.log("got one")
    observable.subscribe(data => {    
      console.log("Got our one product", data)
      console.log(typeof(this.new_product))
      console.log(typeof(data))
      this.new_product = data['data'];
     
      
    })
}
  
  edit(id){  
 
    let observable = this._dataService.update(this.new_product, id);
    observable.subscribe(data => {    
      console.log("Got our quotes!", data)
      if (data['errors']){
        this.errors = data
        console.log(data['errors'])
      }
      else {
        console.log(data['success'])
        this._router.navigate(['/products']);
      }
          
    })
  // })

  }
}
