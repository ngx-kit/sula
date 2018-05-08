import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { IconographyComponent } from './iconography/iconography.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: 'style/colors',
    component: ColorsComponent,
  },
  {
    path: 'style/typography',
    component: TypographyComponent,
  },
  {
    path: 'style/iconography',
    component: IconographyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleRoutingModule {
}
