import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsEktaComponent } from './what-is-ekta.component';

describe('WhatIsEktaComponent', () => {
  let component: WhatIsEktaComponent;
  let fixture: ComponentFixture<WhatIsEktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsEktaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsEktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
