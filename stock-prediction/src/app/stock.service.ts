import { Injectable } from '@angular/core';
import { STOCK } from './stock-data';
import { stock } from "./stock";

@Injectable()
export class StockService {
private stockdata : stock[]=STOCK;
  constructor() { }
  getStock(stockName : String) :stock{
   
    for(var i=0;i<this.stockdata.length;i++)
    {
      if(this.stockdata[i].stockName == stockName)
      return this.stockdata[i];
    
    }
  
  }

}
