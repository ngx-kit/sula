import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { isArray, KitCollapseHostService, KitCollapseItemService } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-vertical-menu-group',
  templateUrl: './ui-vertical-menu-group.component.html',
  styleUrls: ['./ui-vertical-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiVerticalMenuGroupComponent implements OnInit, OnChanges, OnDestroy {
  @Input() active: boolean;

  @Input() activeRoute: any[] | string;

  @ContentChildren(RouterLinkActive) routerLinks: QueryList<RouterLinkActive>;

  activeState = false;

  private destroy = new Subject();

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
    // Check route active
    if (this.router) {
      // Open if needed
      if (this.item.active !== this.isLinkActive()) {
        this.item.active = true;
      }
      // Watch route changes
      this.router.events
        .pipe(
          takeUntil(this.destroy),
          filter(e => e instanceof NavigationEnd),
        )
        .subscribe(() => {
          if (this.item.active !== this.isLinkActive()) {
            this.item.active = true;
          }
        });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('active' in changes) {
      this.item.active = this.active;
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  toggle() {
    this.item.toggle();
  }

  private isLinkActive(): boolean {
    if (this.activeRoute) {
      const urlTree = this.router
        .createUrlTree(isArray(this.activeRoute) ? this.activeRoute : [this.activeRoute]);
      return this.router.isActive(urlTree, false);
    } else {
      return false;
    }
  }
}
