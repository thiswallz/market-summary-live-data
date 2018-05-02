import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';
import { ApiService } from './api.service';
import { Market, LiveMarket } from '../models';
import { map } from 'rxjs/operators/map';

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class MarketService {
  private socket;
  private previusMarket: string;

  constructor(private apiService: ApiService) {
    this.initSocket();
  }

  getAll(): Observable<Market[]> {
    return this.apiService.get('getmarketsummaries').pipe(map(data => data.result));
  }

  onLiveDataMessage(marketName: string): Observable<LiveMarket> {
    console.log('this.previusMarket ', this.previusMarket);
    if (this.previusMarket) {
      //this.socket.off(`liveMarket.${this.previusMarket}`);
    }
    this.previusMarket = marketName;

    return new Observable<LiveMarket>(observer => {
      this.socket.on(`liveMarket.${marketName}`, (data: LiveMarket) => {
        console.log(0, 'recieving', data);
        observer.next(data);
      });
    });
  }

  initSocket(): void {
    console.log('connecting...');
    this.socket = socketIo(SERVER_URL);
  }
}
