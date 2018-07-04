import { ChangeDetectionStrategy, Component, Input, OnChanges, Optional } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';
import { UiButtonColor, UiButtonSize } from '../meta';
import { UiButtonGroupComponent } from '../ui-button-group/ui-button-group.component';

@Component({
  // tslint:disable-next-line
  selector: 'button[uiButton],a[uiButton]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./ui-button.component.scss'],
  providers: [
    KitClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements OnChanges {
  @Input() color: UiButtonColor = 'default';

  @Input() disabled = false;

  @Input() uiButton: void;

  @Input() size: UiButtonSize = 'm';

  @Input() link = false;

  constructor(
    private kitClass: KitClassService,
    @Optional() private group: UiButtonGroupComponent,
  ) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      link: this.link,
      groupDirection: !!this.group ? this.group.direction : null,
    });
  }
}
