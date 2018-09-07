import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDemoComponent } from './module-demo.component';

describe('ModuleDemoComponent', () => {
  let component: ModuleDemoComponent;
  let fixture: ComponentFixture<ModuleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
