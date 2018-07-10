import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      transition('void => true', [
        style({
          transform: 'translateX(-100%)',
        }),
        animate('250ms ease-out', style({
          transform: 'translateY(0)',
        })),
      ]),
      transition('true => void', [
        animate('250ms ease-in', style({
          transform: 'translateX(-100%)',
        })),
      ]),
    ]),
  ],
})
export class NavComponent {
  @Input() inOverlay = false;

  @Output() close = new EventEmitter<void>();

  @HostBinding('@slide') get slideTrigger() {
    return this.inOverlay;
  }
}
