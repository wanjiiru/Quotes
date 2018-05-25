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
    new Quote(1, 'Mandera','Liz','hello world',new Date(2018,5,25,) )
  ]

  constructor() { }

  ngOnInit() {
  }

}


