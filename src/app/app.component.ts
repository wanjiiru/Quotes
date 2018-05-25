import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "QUOTES!"
  quotes =[
    new Quote(1, 'Mandera','Liz','hello world',new Date(2018,5,25,) )
  ]
}
