import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { MarketListComponent } from './market-list/market-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketLiveDataComponent } from './market-live-data/market-live-data.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [MarketListComponent, MarketLiveDataComponent],
  declarations: [MarketListComponent, MarketLiveDataComponent]
})
export class BittrexMarketModule {}
