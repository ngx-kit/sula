import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCustomSelectDemoComponent } from './ui-custom-select-demo.component';

describe('UiCustomSelectDemoComponent', () => {
  let component: UiCustomSelectDemoComponent;
  let fixture: ComponentFixture<UiCustomSelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCustomSelectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCustomSelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
