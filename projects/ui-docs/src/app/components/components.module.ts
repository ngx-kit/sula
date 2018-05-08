import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonDemoModule } from '../../../../ui/src/lib/ui-button/demo/ui-button-demo.module';
import { UiVerticalMenuDemoModule } from '../../../../ui/src/lib/ui-vertical-menu/demo/ui-vertical-menu-demo.module';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    UiButtonDemoModule,
    UiVerticalMenuDemoModule,
  ],
})
export class ComponentsModule {
}
