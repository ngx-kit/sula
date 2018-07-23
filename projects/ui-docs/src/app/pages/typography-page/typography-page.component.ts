import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
