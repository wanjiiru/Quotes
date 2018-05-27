import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = "QUOTES BY ANGULAR"
  quotes =[
    new Quote(1, 'Mandera','Liz','Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do'
    ,new Date(2018,5,25,) ,0,0),
    new Quote(2, 'Mandera','Liz','  Challenges are what make life interesting and overcoming them is what makes life meaningful',new Date(2018,5,25,),0,0 )

  ];


addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote);
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


