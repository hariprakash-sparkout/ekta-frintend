import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNftComponent } from './trending-nft.component';

describe('TrendingNftComponent', () => {
  let component: TrendingNftComponent;
  let fixture: ComponentFixture<TrendingNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
