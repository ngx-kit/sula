import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitAnchorDirective, KitOverlayPosition, KitOverlayPositionService, KitStyleService } from '@ngx-kit/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
  ],
})
export class UiDropdownComponent implements OnInit, OnChanges {
  @Input() anchor: KitAnchorDirective;

  @Input() position: KitOverlayPosition = 'bottom-right';

  constructor(
    private positionService: KitOverlayPositionService,
  ) {
    this.positionService.type = 'dropdown';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.positionService.anchor = this.anchor;
    this.positionService.position = this.position;
    this.positionService.reposition();
  }
}
