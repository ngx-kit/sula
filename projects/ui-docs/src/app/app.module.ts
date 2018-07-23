import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { kitMqBreakpoints } from '@ngx-kit/core';
import { UiModule } from 'ui';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    // Vendors
    // App
    UiModule,
    LayoutModule,
    PagesModule,
    ComponentsModule,
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
