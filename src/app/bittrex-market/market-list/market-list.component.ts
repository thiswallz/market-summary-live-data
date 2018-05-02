import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Market, MarketService } from '../../core';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {
  @Input() liveDataFavs: string[] = new Array();
  @Output() showLiveData = new EventEmitter<Market>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loading: boolean = false;
  displayedColumns = ['MarketName', 'High', 'Low', 'Last', 'Bid', 'Opt'];
  dataSource = new MatTableDataSource<Market>();

  constructor(private marketService: MarketService) {}

  ngOnInit() {
    this.populateData();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  selectLiveData(market: Market) {
    this.showLiveData.emit(market);
  }

  populateData() {
    this.loading = true;
    this.marketService.getAll().subscribe(markets => {
      this.dataSource = new MatTableDataSource(markets);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }
}
