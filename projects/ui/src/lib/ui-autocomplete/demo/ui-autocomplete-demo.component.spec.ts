import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAutocompleteDemoComponent } from './ui-autocomplete-demo.component';

describe('UiAutocompleteDemoComponent', () => {
  let component: UiAutocompleteDemoComponent;
  let fixture: ComponentFixture<UiAutocompleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAutocompleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAutocompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
