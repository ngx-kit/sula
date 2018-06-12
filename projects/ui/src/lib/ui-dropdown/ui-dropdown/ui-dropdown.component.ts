import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import { KitOutsideClickService, KitOverlayToggleDirective, KitSidePosition } from '@ngx-kit/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'scaleY(1)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        })),
      ]),
    ]),
  ],
  providers: [
    KitOutsideClickService,
  ],
})
export class UiDropdownComponent implements OnChanges {
  @Input() toggle: KitOverlayToggleDirective;

  @Input() position: KitSidePosition = 'bottom-right';

  @HostBinding('@host') hostTrigger = true;

  constructor(
    private elementRef: ElementRef,
    private outsideClick: KitOutsideClickService,
  ) {
  }

  ngOnChanges() {
    this.outsideClick.skip = [this.elementRef, this.toggle.nativeEl];
    this.outsideClick.outsideClick.subscribe(() => {
      this.toggle.hide();
    });
  }
}
