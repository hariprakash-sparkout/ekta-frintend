import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEktaNftComponent } from './latest-ekta-nft.component';

describe('LatestEktaNftComponent', () => {
  let component: LatestEktaNftComponent;
  let fixture: ComponentFixture<LatestEktaNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestEktaNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEktaNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
