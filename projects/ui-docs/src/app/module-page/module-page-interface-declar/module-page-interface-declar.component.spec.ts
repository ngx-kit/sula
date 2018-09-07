import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePageInterfaceDeclarComponent } from './module-page-interface-declar.component';

describe('ModulePageInterfaceDeclarComponent', () => {
  let component: ModulePageInterfaceDeclarComponent;
  let fixture: ComponentFixture<ModulePageInterfaceDeclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePageInterfaceDeclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePageInterfaceDeclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
