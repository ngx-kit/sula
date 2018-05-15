import { NgModule } from '@angular/core';
import { UiNotificationModule } from './ui-notification/ui-notification.module';

@NgModule({
  imports: [
    UiNotificationModule.forRoot(),
  ],
})
export class UiModule {
}
