import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  Optional,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
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
export class UiVerticalMenuGroupComponent implements OnInit, OnChanges {
  @Input() active: boolean;

  @ContentChildren(RouterLinkActive) routerLinks: QueryList<RouterLinkActive>;

  activeState = false;

  constructor(
    private item: KitCollapseItemService,
    private host: KitCollapseHostService,
    private cdr: ChangeDetectorRef,
    @Optional() private router: Router,
  ) {
  }

  ngOnInit() {
    this.host.activeChanges.subscribe(() => {
      this.activeState = this.item.active;
      this.cdr.detectChanges();
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
