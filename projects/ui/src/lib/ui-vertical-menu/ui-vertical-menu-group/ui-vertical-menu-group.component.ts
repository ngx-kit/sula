import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { KitCollapseHostService, KitCollapseItemService } from '@ngx-kit/core';

@Component({
  selector: 'ui-vertical-menu-group',
  templateUrl: './ui-vertical-menu-group.component.html',
  styleUrls: ['./ui-vertical-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiVerticalMenuGroupComponent implements OnInit, OnChanges, DoCheck {
  @Input() active: boolean;

  @ContentChildren(RouterLinkActive) routerLinks: QueryList<RouterLinkActive>;

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

  ngDoCheck() {
    if (this.routerLinks) {
      this.routerLinks.forEach(rl => {
        if (rl.isActive) {
          this.item.active = true;
        }
      });
    }
  }

  toggle() {
    this.item.toggle();
  }
}
