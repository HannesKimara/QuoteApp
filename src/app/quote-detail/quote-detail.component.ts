import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() downvoted = new EventEmitter<string>();
  @Output() upvoted = new EventEmitter<string>();
  
  downvoteStarted(){
    this.downvoted.emit('hasdownVoted');
  }

  upvoteStarted(){
    this.upvoted.emit('haupVoted')
  }

  constructor() { }

  ngOnInit() {
  }

}
