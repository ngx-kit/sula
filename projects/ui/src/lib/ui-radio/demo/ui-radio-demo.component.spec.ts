import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadioDemoComponent } from './ui-radio-demo.component';

describe('UiRadioDemoComponent', () => {
  let component: UiRadioDemoComponent;
  let fixture: ComponentFixture<UiRadioDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRadioDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRadioDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
