import { NgModule } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';
import { icons } from './icons';
import { UiNotificationModule } from './ui-notification/ui-notification.module';

@NgModule({
  imports: [
    UiNotificationModule.forRoot(),
  ],
})
export class UiModule {
  constructor(private registry: KitIconsRegistryService) {
    this.registry.add(
      icons.reduce((prev, curr) => {
        return [...prev, ...curr.icons];
      }, []),
    );
  }
}
