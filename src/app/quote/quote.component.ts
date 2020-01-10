import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(0,"Commissioner", "Hannes Kimara", "Like a rat in a trap", new Date(9,12,12)),
    new Quote(1,"Lex Luthor", "Jebediah Kerman", "The bells have been rung, they cannot be unrung", new Date(2019,6,30)),
    new Quote(2,"Gourmet", "Jebediah Kerman", "Hi I'm gourmet, here to cook and I definitely do not have any ulterior motives", new Date(2019,12,30))
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
