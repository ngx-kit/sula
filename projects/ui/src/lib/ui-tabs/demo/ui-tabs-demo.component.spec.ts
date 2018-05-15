import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabsDemoComponent } from './ui-tabs-demo.component';

describe('UiTabsDemoComponent', () => {
  let component: UiTabsDemoComponent;
  let fixture: ComponentFixture<UiTabsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTabsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
