import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ui-slider-demo',
  templateUrl: './ui-slider-demo.component.html',
  styleUrls: ['./ui-slider-demo.component.scss'],
})
export class UiSliderDemoComponent implements OnInit {

  value1 = 5;

  value2 = 150;

  value3 = 75;

  rangeValue = [-150, 350];

  constructor() {
  }

  ngOnInit() {
  }

}
