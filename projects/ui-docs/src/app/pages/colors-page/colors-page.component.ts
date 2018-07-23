import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
