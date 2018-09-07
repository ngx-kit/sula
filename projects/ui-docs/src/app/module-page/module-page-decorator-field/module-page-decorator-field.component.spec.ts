import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePageDecoratorFieldComponent } from './module-page-decorator-field.component';

describe('ModulePageDecoratorFieldComponent', () => {
  let component: ModulePageDecoratorFieldComponent;
  let fixture: ComponentFixture<ModulePageDecoratorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePageDecoratorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePageDecoratorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
