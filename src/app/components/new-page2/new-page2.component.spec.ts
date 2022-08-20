import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPage2Component } from './new-page2.component';

describe('NewPage2Component', () => {
  let component: NewPage2Component;
  let fixture: ComponentFixture<NewPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
