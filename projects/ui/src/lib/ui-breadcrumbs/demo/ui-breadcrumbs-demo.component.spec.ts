import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBreadcrumbsDemoComponent } from './ui-breadcrumbs-demo.component';

describe('UiBreadcrumbsDemoComponent', () => {
  let component: UiBreadcrumbsDemoComponent;
  let fixture: ComponentFixture<UiBreadcrumbsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBreadcrumbsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBreadcrumbsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
