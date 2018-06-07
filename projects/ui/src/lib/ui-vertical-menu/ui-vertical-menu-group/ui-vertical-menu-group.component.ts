import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { KitCollapseHostService, KitCollapseItemService } from '@ngx-kit/core';

/**
 * @apiOrder 3
 */
@Component({
  selector: 'ui-vertical-menu-group',
  templateUrl: './ui-vertical-menu-group.component.html',
  styleUrls: ['./ui-vertical-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiVerticalMenuGroupComponent implements OnInit, OnChanges {
  @Input() active: boolean;

  activeState = false;

  constructor(
    private item: KitCollapseItemService,
    private host: KitCollapseHostService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.host.activeChanges.subscribe(() => {
      this.activeState = this.item.active;
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('active' in changes) {
      this.item.active = this.active;
    }
  }

  toggle() {
    this.item.toggle();
  }
}
