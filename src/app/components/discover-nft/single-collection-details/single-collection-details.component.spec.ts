import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCollectionDetailsComponent } from './single-collection-details.component';

describe('SingleCollectionDetailsComponent', () => {
  let component: SingleCollectionDetailsComponent;
  let fixture: ComponentFixture<SingleCollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCollectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
