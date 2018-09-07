import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule, KitIconsModule, KitIconsRegistryService } from '@ngx-kit/core';
import { UiVerticalMenuGroupComponent } from './ui-vertical-menu-group/ui-vertical-menu-group.component';
import { UiVerticalMenuItemComponent } from './ui-vertical-menu-item/ui-vertical-menu-item.component';
import { UiVerticalMenuSubComponent } from './ui-vertical-menu-sub/ui-vertical-menu-sub.component';
import { UiVerticalMenuComponent } from './ui-vertical-menu/ui-vertical-menu.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
    KitIconsModule,
  ],
  declarations: [
    UiVerticalMenuComponent,
    UiVerticalMenuItemComponent,
    UiVerticalMenuGroupComponent,
    UiVerticalMenuSubComponent,
  ],
  exports: [
    KitCollapseModule,
    UiVerticalMenuComponent,
    UiVerticalMenuItemComponent,
    UiVerticalMenuGroupComponent,
    UiVerticalMenuSubComponent,
  ],
})
export class UiVerticalMenuModule {
  constructor(
    private icons: KitIconsRegistryService,
  ) {
    this.icons.add([
      {
        name: 'sula-arrow-down',
        xml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
      },
      {
        name: 'sula-arrow-up',
        xml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
      },
    ]);
  }
}
