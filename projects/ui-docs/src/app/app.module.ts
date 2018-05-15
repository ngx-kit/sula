import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UiModule } from 'ui';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { StyleModule } from './style/style.module';

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
    DashboardModule,
    StyleModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
