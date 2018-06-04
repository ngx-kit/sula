import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-item,button[uiDropdownItem],a[uiDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDropdownItemComponent {
  @Input() uiDropdownItem: void;
}
