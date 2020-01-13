import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [];
  
  deleteQuote(index){
    let toDelete = confirm(`Are you sure you want to delete?`);
    if (toDelete){
      this.quotes.splice(index,1);
    } else {
      //pass
    }
  }

  upVote(index){
    let currUpVotes = this.quotes[index].upvotes;
    currUpVotes = currUpVotes+1;
    let currDownVotes = this.quotes[index].downvotes;
    this.quotes[index].votes = currUpVotes - currDownVotes;
    this.quotes[index].upvotes = currUpVotes
  }

  downVote(index){
    let currUpVotes = this.quotes[index].upvotes;
    let currDownVotes = this.quotes[index].downvotes;
    currDownVotes = currDownVotes+1;
    this.quotes[index].votes = currUpVotes - currDownVotes;
    this.quotes[index].downvotes = currDownVotes;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.entryDateTime = new Date();
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
