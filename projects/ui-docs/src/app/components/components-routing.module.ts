import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAccordionDemoComponent } from '../../../../ui/src/lib/ui-accordion/demo/ui-accordion-demo.component';
import { UiAlertDemoComponent } from '../../../../ui/src/lib/ui-alert/demo/ui-alert-demo.component';
import { UiAutocompleteDemoComponent } from '../../../../ui/src/lib/ui-autocomplete/demo/ui-autocomplete-demo.component';
import { UiBadgeDemoComponent } from '../../../../ui/src/lib/ui-badge/demo/ui-badge-demo.component';
import { UiBreadcrumbsDemoComponent } from '../../../../ui/src/lib/ui-breadcrumbs/demo/ui-breadcrumbs-demo.component';
import { UiButtonDemoComponent } from '../../../../ui/src/lib/ui-button/demo/ui-button-demo.component';
import { UiCheckboxDemoComponent } from '../../../../ui/src/lib/ui-checkbox/demo/ui-checkbox-demo.component';
import { UiCustomSelectDemoComponent } from '../../../../ui/src/lib/ui-custom-select/demo/ui-custom-select-demo.component';
import { UiDatePickerDemoComponent } from '../../../../ui/src/lib/ui-date-picker/demo/ui-date-picker-demo.component';
import { UiDialogDemoComponent } from '../../../../ui/src/lib/ui-dialog/demo/ui-dialog-demo.component';
import { UiDrawerDemoComponent } from '../../../../ui/src/lib/ui-drawer/demo/ui-drawer-demo.component';
import { UiDropdownDemoComponent } from '../../../../ui/src/lib/ui-dropdown/demo/ui-dropdown-demo.component';
import { UiFormDemoComponent } from '../../../../ui/src/lib/ui-form/demo/ui-form-demo.component';
import { UiLoadingBarDemoComponent } from '../../../../ui/src/lib/ui-loading-bar/demo/ui-loading-bar-demo.component';
import { UiModalDemoComponent } from '../../../../ui/src/lib/ui-modal/demo/ui-modal-demo.component';
import { UiNotificationDemoComponent } from '../../../../ui/src/lib/ui-notification/demo/ui-notification-demo.component';
import { UiPopupDemoComponent } from '../../../../ui/src/lib/ui-popup/demo/ui-popup-demo.component';
import { UiRadioDemoComponent } from '../../../../ui/src/lib/ui-radio/demo/ui-radio-demo.component';
import { UiRatingDemoComponent } from '../../../../ui/src/lib/ui-rating/demo/ui-rating-demo.component';
import { UiRatingDemoModule } from '../../../../ui/src/lib/ui-rating/demo/ui-rating-demo.module';
import { UiScrollDemoComponent } from '../../../../ui/src/lib/ui-scroll/demo/ui-scroll-demo.component';
import { UiSelectDemoComponent } from '../../../../ui/src/lib/ui-select/demo/ui-select-demo.component';
import { UiSliderDemoComponent } from '../../../../ui/src/lib/ui-slider/demo/ui-slider-demo.component';
import { UiTabsDemoComponent } from '../../../../ui/src/lib/ui-tabs/demo/ui-tabs-demo.component';
import { UiTextDemoComponent } from '../../../../ui/src/lib/ui-text/demo/ui-text-demo.component';
import { UiToggleDemoComponent } from '../../../../ui/src/lib/ui-toggle/demo/ui-toggle-demo.component';
import { UiTooltipDemoComponent } from '../../../../ui/src/lib/ui-tooltip/demo/ui-tooltip-demo.component';
import { UiVerticalMenuDemoComponent } from '../../../../ui/src/lib/ui-vertical-menu/demo/ui-vertical-menu-demo.component';

const routes: Routes = [
  {
    path: 'component',
    children: [
      {
        path: 'ui-accordion',
        component: UiAccordionDemoComponent,
      },
      {
        path: 'ui-alert',
        component: UiAlertDemoComponent,
      },
      {
        path: 'ui-autocomplete',
        component: UiAutocompleteDemoComponent,
      },
      {
        path: 'ui-badge',
        component: UiBadgeDemoComponent,
      },
      {
        path: 'ui-breadcrumbs',
        component: UiBreadcrumbsDemoComponent,
      },
      {
        path: 'ui-button',
        component: UiButtonDemoComponent,
      },
      {
        path: 'ui-checkbox',
        component: UiCheckboxDemoComponent,
      },
      {
        path: 'ui-custom-select',
        component: UiCustomSelectDemoComponent,
      },
      {
        path: 'ui-date-picker',
        component: UiDatePickerDemoComponent,
      },
      {
        path: 'ui-dialog',
        component: UiDialogDemoComponent,
      },
      {
        path: 'ui-drawer',
        component: UiDrawerDemoComponent,
      },
      {
        path: 'ui-dropdown',
        component: UiDropdownDemoComponent,
      },
      {
        path: 'ui-form',
        component: UiFormDemoComponent,
      },
      {
        path: 'ui-loading-bar',
        component: UiLoadingBarDemoComponent,
      },
      {
        path: 'ui-modal',
        component: UiModalDemoComponent,
      },
      {
        path: 'ui-notification',
        component: UiNotificationDemoComponent,
      },
      {
        path: 'ui-popup',
        component: UiPopupDemoComponent,
      },
      {
        path: 'ui-radio',
        component: UiRadioDemoComponent,
      },
      {
        path: 'ui-rating',
        component: UiRatingDemoComponent,
      },
      {
        path: 'ui-scroll',
        component: UiScrollDemoComponent,
      },
      {
        path: 'ui-select',
        component: UiSelectDemoComponent,
      },
      {
        path: 'ui-slider',
        component: UiSliderDemoComponent,
      },
      {
        path: 'ui-tabs',
        component: UiTabsDemoComponent,
      },
      {
        path: 'ui-text',
        component: UiTextDemoComponent,
      },
      {
        path: 'ui-toggle',
        component: UiToggleDemoComponent,
      },
      {
        path: 'ui-tooltip',
        component: UiTooltipDemoComponent,
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
