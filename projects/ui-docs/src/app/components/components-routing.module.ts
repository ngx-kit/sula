import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiButtonDemoComponent } from '../../../../ui/src/lib/ui-button/demo/ui-button-demo.component';
import { UiVerticalMenuDemoComponent } from '../../../../ui/src/lib/ui-vertical-menu/demo/ui-vertical-menu-demo.component';

const routes: Routes = [
  {
    path: 'component',
    children: [
      {
        path: 'ui-button',
        component: UiButtonDemoComponent,
      },
      {
        path: 'ui-vertical-menu',
        component: UiVerticalMenuDemoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {
}
