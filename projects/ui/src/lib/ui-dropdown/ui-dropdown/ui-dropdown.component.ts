import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges } from '@angular/core';
import { KitOutsideClickService, KitOverlayToggleDirective, KitSidePosition } from '@ngx-kit/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOutsideClickService,
  ],
})
export class UiDropdownComponent implements OnChanges {
  @Input() toggle: KitOverlayToggleDirective;

  @Input() position: KitSidePosition = 'bottom-right';

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
