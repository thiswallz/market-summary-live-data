import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BittrexMarketModule } from './bittrex-market/bittrex-market.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.modules';
import {
  MatTabsModule,
  MatGridListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDividerModule,
  MatCardModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BittrexMarketModule,
    CoreModule,
    MatDividerModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
