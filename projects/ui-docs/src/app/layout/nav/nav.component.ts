import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  @Input() closed = true;

  @Output() close = new EventEmitter<void>();

  @HostBinding('class.-animate') animateClass = false;

  constructor() {
  }

  @HostBinding('class.-closed') get closedClass() {
    return this.closed;
  }

  ngOnInit() {
    setTimeout(() => {
      this.animateClass = true;
    }, 1);
  }
}
