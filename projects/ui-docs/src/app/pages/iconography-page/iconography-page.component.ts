import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { icons } from 'ui';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography-page.component.html',
  styleUrls: ['./iconography-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconographyPageComponent implements OnInit {
  icons = icons;

  constructor() {
  }

  ngOnInit() {
  }

}
