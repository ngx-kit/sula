import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectDemoComponent } from './ui-select-demo.component';

describe('UiSelectDemoComponent', () => {
  let component: UiSelectDemoComponent;
  let fixture: ComponentFixture<UiSelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSelectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
