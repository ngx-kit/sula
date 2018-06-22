import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { icons } from 'ui';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconographyComponent implements OnInit {
  icons = icons;

  constructor() {
  }

  ngOnInit() {
  }

}
