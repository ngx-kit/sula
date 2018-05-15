import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNotificationDemoComponent } from './ui-notification-demo.component';

describe('UiNotificationDemoComponent', () => {
  let component: UiNotificationDemoComponent;
  let fixture: ComponentFixture<UiNotificationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNotificationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
