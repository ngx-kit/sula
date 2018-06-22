import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, } from '@angular/core';
import { KitClassService, KitOverlayPosition, KitOverlayPositionService, KitStyleService, } from '@ngx-kit/core';
import { UiTooltipColors } from '../meta';

@Component({
  selector: 'ui-tooltip-view',
  template: `{{ content }}`,
  styleUrls: ['./ui-tooltip-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
    KitClassService,
  ],
  animations: [
    trigger('host', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms', style({opacity: 0})),
      ]),
    ]),
  ],
})
export class UiTooltipViewComponent implements OnChanges {
  @Input() anchorEl: any;

  @Input() color: UiTooltipColors = 'default';

  @Input() content: string;

  @HostBinding('@host') hostTrigger = true;

  @Input() position: KitOverlayPosition = 'top';

  constructor(
    private overlayPosition: KitOverlayPositionService,
    private kitClass: KitClassService,
  ) {
  }

  ngOnChanges() {
    // position service
    this.overlayPosition.anchor = this.anchorEl;
    this.overlayPosition.position = this.position;
    this.overlayPosition.reposition();
    // class
    this.kitClass.apply({
      color: this.color,
    });
  }
}
