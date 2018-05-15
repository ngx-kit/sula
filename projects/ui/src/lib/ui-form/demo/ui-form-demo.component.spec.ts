import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormDemoComponent } from './ui-form-demo.component';

describe('UiFormDemoComponent', () => {
  let component: UiFormDemoComponent;
  let fixture: ComponentFixture<UiFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
