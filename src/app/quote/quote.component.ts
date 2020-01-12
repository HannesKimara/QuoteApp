import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [];
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.entryDateTime = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
