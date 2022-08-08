import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTheBuzzComponent } from './why-the-buzz.component';

describe('WhyTheBuzzComponent', () => {
  let component: WhyTheBuzzComponent;
  let fixture: ComponentFixture<WhyTheBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTheBuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTheBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
