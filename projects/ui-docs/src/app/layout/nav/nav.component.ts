import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ContentService } from '../../../content/content';

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
export class NavComponent implements OnInit {
  @Input() inOverlay = false;

  @Output() close = new EventEmitter<void>();

  modules: string[];

  constructor(
    private content: ContentService,
  ) {
  }

  ngOnInit() {
    console.log('mm?', this.content.content);
    this.modules = Object
      .keys(this.content.content.filesMap.lib)
      .filter(k => typeof this.content.content.filesMap.lib[k] === 'object');
  }

  @HostBinding('@slide') get slideTrigger() {
    return this.inOverlay;
  }
}
