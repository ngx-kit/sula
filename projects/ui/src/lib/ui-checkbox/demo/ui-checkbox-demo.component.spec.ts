import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckboxDemoComponent } from './ui-checkbox-demo.component';

describe('UiCheckboxDemoComponent', () => {
  let component: UiCheckboxDemoComponent;
  let fixture: ComponentFixture<UiCheckboxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCheckboxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCheckboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
