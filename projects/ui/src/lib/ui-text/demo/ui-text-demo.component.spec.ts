import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTextDemoComponent } from './ui-text-demo.component';

describe('UiTextDemoComponent', () => {
  let component: UiTextDemoComponent;
  let fixture: ComponentFixture<UiTextDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTextDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
