import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPartnerComponent } from './featured-partner.component';

describe('FeaturedPartnerComponent', () => {
  let component: FeaturedPartnerComponent;
  let fixture: ComponentFixture<FeaturedPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
