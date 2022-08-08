import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoIMintComponent } from './how-do-i-mint.component';

describe('HowDoIMintComponent', () => {
  let component: HowDoIMintComponent;
  let fixture: ComponentFixture<HowDoIMintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDoIMintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoIMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
