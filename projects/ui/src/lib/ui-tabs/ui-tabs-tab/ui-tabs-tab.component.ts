import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { isDefined, KitSlideHostService } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-tabs-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-tabs-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsTabComponent implements OnInit, OnDestroy {
  @HostBinding('class.active') classActive = false;

  @Input() id: number;

  private destroy = new Subject<void>();

  constructor(private host: KitSlideHostService) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.host.activeChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(id => {
        this.classActive = id === this.id;
      });
  }

  @HostListener('click')
  clickHandler() {
    if (isDefined(this.id) && this.id !== null) {
      this.host.active = this.id;
    }
  }
}
