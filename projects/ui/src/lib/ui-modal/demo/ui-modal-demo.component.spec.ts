import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalDemoComponent } from './ui-modal-demo.component';

describe('UiModalDemoComponent', () => {
  let component: UiModalDemoComponent;
  let fixture: ComponentFixture<UiModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
