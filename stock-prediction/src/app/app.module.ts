import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './stock.service';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
