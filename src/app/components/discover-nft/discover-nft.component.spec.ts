import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverNftComponent } from './discover-nft.component';

describe('DiscoverNftComponent', () => {
  let component: DiscoverNftComponent;
  let fixture: ComponentFixture<DiscoverNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
