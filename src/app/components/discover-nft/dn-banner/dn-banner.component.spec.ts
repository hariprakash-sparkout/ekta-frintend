import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnBannerComponent } from './dn-banner.component';

describe('DnBannerComponent', () => {
  let component: DnBannerComponent;
  let fixture: ComponentFixture<DnBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
