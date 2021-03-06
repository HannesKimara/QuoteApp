import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ElapsedTimePipe } from './elapsed-time.pipe';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightTopQuoteDirective } from './highlight-top-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ElapsedTimePipe,
    QuoteDetailComponent,
    QuoteFormComponent,
    HighlightTopQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
