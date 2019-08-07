import { Component, OnInit } from '@angular/core';
import { StockService  } from "../stock.service";
import { STOCK } from '../stock-data';
import { stock } from '../stock';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private currentstockName : stock;
  private pastSearchValue : stock[] = [];

  constructor(private stockservice : StockService) { }

  ngOnInit() {
  }
  getstock(stockName : string ):void{


    this.currentstockName = this.stockservice.getStock(stockName);
    this.currentstockName.searchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.currentstockName);
  }

}
