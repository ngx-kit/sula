import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePageClassDeclarComponent } from './module-page-class-declar.component';

describe('ModulePageClassDeclarComponent', () => {
  let component: ModulePageClassDeclarComponent;
  let fixture: ComponentFixture<ModulePageClassDeclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePageClassDeclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePageClassDeclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
