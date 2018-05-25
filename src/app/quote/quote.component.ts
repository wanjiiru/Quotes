import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = "QUOTES!"
  quotes =[
    new Quote(1, 'Mandera','Liz','hello world',new Date(2018,5,25,) ),
    new Quote(1, 'Mandera','Liz','hello world',new Date(2018,5,25,) )

  ]



addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate= new Date(quote.completeDate)
  this.quotes.push(quote)
}





  completeQuote(isComplete,index){
    if(isComplete){
      let toComplete = confirm('Are you sure you want to delete?')
      if(toComplete){
        this.quotes.splice(index,1)
      }
    }
  }






  toogleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

  constructor() { }

  ngOnInit() {
  }

}


