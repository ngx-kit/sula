import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAccordionDemoModule } from '../../../../ui/src/lib/ui-accordion/demo/ui-accordion-demo.module';
import { UiAlertDemoModule } from '../../../../ui/src/lib/ui-alert/demo/ui-alert-demo.module';
import { UiAutocompleteDemoModule } from '../../../../ui/src/lib/ui-autocomplete/demo/ui-autocomplete-demo.module';
import { UiBadgeDemoModule } from '../../../../ui/src/lib/ui-badge/demo/ui-badge-demo.module';
import { UiBreadcrumbsDemoModule } from '../../../../ui/src/lib/ui-breadcrumbs/demo/ui-breadcrumbs-demo.module';
import { UiButtonDemoModule } from '../../../../ui/src/lib/ui-button/demo/ui-button-demo.module';
import { UiCheckboxDemoModule } from '../../../../ui/src/lib/ui-checkbox/demo/ui-checkbox-demo.module';
import { UiCustomSelectDemoModule } from '../../../../ui/src/lib/ui-custom-select/demo/ui-custom-select-demo.module';
import { UiDatePickerDemoModule } from '../../../../ui/src/lib/ui-date-picker/demo/ui-date-picker-demo.module';
import { UiDialogDemoModule } from '../../../../ui/src/lib/ui-dialog/demo/ui-dialog-demo.module';
import { UiDrawerDemoModule } from '../../../../ui/src/lib/ui-drawer/demo/ui-drawer-demo.module';
import { UiDropdownDemoModule } from '../../../../ui/src/lib/ui-dropdown/demo/ui-dropdown-demo.module';
import { UiFileDemoModule } from '../../../../ui/src/lib/ui-file/demo/ui-file-demo.module';
import { UiFormDemoModule } from '../../../../ui/src/lib/ui-form/demo/ui-form-demo.module';
import { UiLoadingBarDemoModule } from '../../../../ui/src/lib/ui-loading-bar/demo/ui-loading-bar-demo.module';
import { UiModalDemoModule } from '../../../../ui/src/lib/ui-modal/demo/ui-modal-demo.module';
import { UiNotificationDemoModule } from '../../../../ui/src/lib/ui-notification/demo/ui-notification-demo.module';
import { UiPopupDemoModule } from '../../../../ui/src/lib/ui-popup/demo/ui-popup-demo.module';
import { UiRadioDemoModule } from '../../../../ui/src/lib/ui-radio/demo/ui-radio-demo.module';
import { UiRatingDemoModule } from '../../../../ui/src/lib/ui-rating/demo/ui-rating-demo.module';
import { UiScrollDemoModule } from '../../../../ui/src/lib/ui-scroll/demo/ui-scroll-demo.module';
import { UiSelectDemoModule } from '../../../../ui/src/lib/ui-select/demo/ui-select-demo.module';
import { UiSliderDemoModule } from '../../../../ui/src/lib/ui-slider/demo/ui-slider-demo.module';
import { UiTabsDemoModule } from '../../../../ui/src/lib/ui-tabs/demo/ui-tabs-demo.module';
import { UiTextDemoModule } from '../../../../ui/src/lib/ui-text/demo/ui-text-demo.module';
import { UiToggleDemoModule } from '../../../../ui/src/lib/ui-toggle/demo/ui-toggle-demo.module';
import { UiTooltipDemoModule } from '../../../../ui/src/lib/ui-tooltip/demo/ui-tooltip-demo.module';
import { UiVerticalMenuDemoModule } from '../../../../ui/src/lib/ui-vertical-menu/demo/ui-vertical-menu-demo.module';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    // Demos
    UiAccordionDemoModule,
    UiAlertDemoModule,
    UiAutocompleteDemoModule,
    UiBadgeDemoModule,
    UiBreadcrumbsDemoModule,
    UiButtonDemoModule,
    UiCheckboxDemoModule,
    UiCustomSelectDemoModule,
    UiDatePickerDemoModule,
    UiDialogDemoModule,
    UiDrawerDemoModule,
    UiDropdownDemoModule,
    UiFileDemoModule,
    UiFormDemoModule,
    UiLoadingBarDemoModule,
    UiModalDemoModule,
    UiNotificationDemoModule,
    UiPopupDemoModule,
    UiRadioDemoModule,
    UiRatingDemoModule,
    UiScrollDemoModule,
    UiSelectDemoModule,
    UiSliderDemoModule,
    UiTabsDemoModule,
    UiTextDemoModule,
    UiToggleDemoModule,
    UiTooltipDemoModule,
    UiVerticalMenuDemoModule,
  ],
})
export class ComponentsModule {
}
