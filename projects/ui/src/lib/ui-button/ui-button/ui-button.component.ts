import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Optional,
} from '@angular/core';
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
export class UiButtonComponent implements OnInit, OnChanges {
  @Input() color: UiButtonColor = 'default';

  @Input() disabled = false;

  @Input() uiButton: void;

  @Input() size: UiButtonSize = 'm';

  @Input() link = false;

  @HostBinding('class.-animate') animateClass = false;

  constructor(
    private kitClass: KitClassService,
    @Optional() private group: UiButtonGroupComponent,
  ) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
    setTimeout(() => {
      this.animateClass = true;
    }, 1);
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
