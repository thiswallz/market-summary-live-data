import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Market } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  marketName: string;
  liveDataFavs: string[] = new Array();
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}

  handleFav(market: string) {
    if (this.liveDataFavs.indexOf(market) >= 0) {
      this.liveDataFavs.splice(this.liveDataFavs.indexOf(market), 1);
    } else {
      this.liveDataFavs.push(market);
    }
  }

  showLiveData(market: Market) {
    this.marketName = market.MarketName;
    if (!this.sidenav.opened) {
      this.sidenav.open();
    }
  }
}
