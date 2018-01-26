import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  quotes;
  newQuote: any;
  constructor(private _dataService: DataService){}
  ngOnInit(){   
    // this.newQuote= { quote: "", author: "" }
  }
  // addQuote() {
  //   console.log(this.newQuote)
  //   let observable = this._dataService.addQuote(this.newQuote);
  //   observable.subscribe(newQuote => {
  //     console.log("Got data back!", newQuote),
  //     this.quotes = newQuote
  //     // this.newQuote = { title: "", description: "" }
  //   })
  //   this.getQuotesFromService()
  // }
  // getQuotesFromService(){
  //   let observable = this._dataService.getQuotes();
  //   observable.subscribe(data => {    
  //     console.log("Got our quotes!", data),
  //     this.quotes = data
      
  //   });
  // }
  // upvoteThis(each){
  //   each.votes ++
  //   let observable = this._dataService.upvoteQuotes(each);
  //   observable.subscribe(data => {    
  //     console.log("Got our quotes!", data)
          
  //   });
  // }
  // downvoteThis(each){
  //   each.votes --
  //   let observable = this._dataService.downvoteQuotes(each);
  //   observable.subscribe(data => {    
  //     console.log("Got our quotes!", data)    
      
  //   });
  // }
  // deleteThis(id){
  //   console.log(id)
  //   let observable = this._dataService.deleteTask(id);
  //   observable.subscribe(data => {
  //     console.log("deleting...")

  //   })
  //   this.getQuotesFromService()
  // } 
  //components call methods on the service(which returns the observable)
}
