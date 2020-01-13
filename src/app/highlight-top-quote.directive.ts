import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTopQuote]'
})

export class HighlightTopQuoteDirective {

  constructor(private elem: ElementRef) { }


}
