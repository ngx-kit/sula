import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSliderDemoComponent } from './ui-slider-demo.component';

describe('UiSliderDemoComponent', () => {
  let component: UiSliderDemoComponent;
  let fixture: ComponentFixture<UiSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
