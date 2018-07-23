import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { IconographyPageComponent } from './iconography-page/iconography-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { TypographyPageComponent } from './typography-page/typography-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'style/colors',
    component: ColorsPageComponent,
  },
  {
    path: 'style/typography',
    component: TypographyPageComponent,
  },
  {
    path: 'style/iconography',
    component: IconographyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
