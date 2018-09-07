import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { kitMqBreakpoints } from '@ngx-kit/core';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { DemoModule } from '../../../ui/src/lib/demo.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ModuleDemoComponent } from './module-demo/module-demo.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModulePageClassDeclarComponent } from './module-page/module-page-class-declar/module-page-class-declar.component';
import { ModulePageInterfaceDeclarComponent } from './module-page/module-page-interface-declar/module-page-interface-declar.component';
import { ModulePageFunctionDeclarComponent } from './module-page/module-page-function-declar/module-page-function-declar.component';
import { MdComponent } from './md/md.component';
import { ModulePageDecoratorFieldComponent } from './module-page/module-page-decorator-field/module-page-decorator-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulePageComponent,
    ModuleDemoComponent,
    ModulePageClassDeclarComponent,
    ModulePageInterfaceDeclarComponent,
    ModulePageFunctionDeclarComponent,
    MdComponent,
    ModulePageDecoratorFieldComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'module/:name',
        component: ModulePageComponent,
      },
    ]),
    // Vendors
    MdRenderModule,
    // UI
    DemoModule,
    // App
    LayoutModule,
  ],
  providers: [
    {
      provide: kitMqBreakpoints,
      useValue: {
        mobile: '320px',
        tablet: '740px',
        desktop: '980px',
        wide: '1300px',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
