import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiRatingModule } from '../ui-rating.module';
import { UiRatingDemoComponent } from './ui-rating-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiRatingModule,
  ],
  declarations: [
    UiRatingDemoComponent,
  ],
  entryComponents: [
    UiRatingDemoComponent,
  ],
})
export class UiRatingDemoModule {
}
