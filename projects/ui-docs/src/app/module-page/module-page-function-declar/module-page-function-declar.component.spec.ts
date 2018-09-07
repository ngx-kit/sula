import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePageFunctionDeclarComponent } from './module-page-function-declar.component';

describe('ModulePageFunctionDeclarComponent', () => {
  let component: ModulePageFunctionDeclarComponent;
  let fixture: ComponentFixture<ModulePageFunctionDeclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePageFunctionDeclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePageFunctionDeclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
