import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltipDemoComponent } from './ui-tooltip-demo.component';

describe('UiTooltipDemoComponent', () => {
  let component: UiTooltipDemoComponent;
  let fixture: ComponentFixture<UiTooltipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTooltipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
