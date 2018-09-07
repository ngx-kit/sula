import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-scroll-demo.component.html',
  styleUrls: ['./ui-scroll-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiScrollDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
