import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAlertDemoComponent } from './ui-alert-demo.component';

describe('UiAlertDemoComponent', () => {
  let component: UiAlertDemoComponent;
  let fixture: ComponentFixture<UiAlertDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAlertDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
