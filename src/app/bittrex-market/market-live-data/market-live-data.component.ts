import { Component, OnInit, Input } from '@angular/core';
import { Market, MarketService, LiveMarket } from '../../core';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-market-live-data',
  templateUrl: './market-live-data.component.html',
  styleUrls: ['./market-live-data.component.css']
})
export class MarketLiveDataComponent implements OnInit {
  @Input() market: string;
  liveData: Market[] = new Array();
  readonly MAX_ELEMENTS: number = 10;
  public liveData$: ISubscription;

  constructor(private marketService: MarketService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.liveData$) {
      this.liveData$.unsubscribe();
      this.liveData = [];
    }
    this.liveData$ = this.marketService.onLiveDataMessage(this.market).subscribe(market => {
      if (this.liveData.length > this.MAX_ELEMENTS) {
        this.liveData = [];
      }
      this.liveData.push(market.msg);
    });
  }

  ngOnDestroy() {
    this.liveData$.unsubscribe();
  }
}
