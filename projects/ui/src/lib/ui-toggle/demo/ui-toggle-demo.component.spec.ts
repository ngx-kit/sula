import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToggleDemoComponent } from './ui-toggle-demo.component';

describe('UiToggleDemoComponent', () => {
  let component: UiToggleDemoComponent;
  let fixture: ComponentFixture<UiToggleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiToggleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
