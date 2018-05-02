import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLiveDataComponent } from './market-live-data.component';

describe('MarketLiveDataComponent', () => {
  let component: MarketLiveDataComponent;
  let fixture: ComponentFixture<MarketLiveDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketLiveDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
