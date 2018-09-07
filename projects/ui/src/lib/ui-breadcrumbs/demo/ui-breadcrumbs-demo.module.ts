import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiBreadcrumbsModule } from '../ui-breadcrumbs.module';
import { UiBreadcrumbsDemoComponent } from './ui-breadcrumbs-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiBreadcrumbsModule,
  ],
  declarations: [UiBreadcrumbsDemoComponent],
  entryComponents: [UiBreadcrumbsDemoComponent],
})
export class UiBreadcrumbsDemoModule {
}
