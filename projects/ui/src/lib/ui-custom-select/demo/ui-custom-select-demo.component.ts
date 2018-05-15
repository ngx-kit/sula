import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ui-custom-select-demo.component.html',
  styleUrls: ['./ui-custom-select-demo.component.scss'],
})
export class UiCustomSelectDemoComponent implements OnInit {

  model = 1;

  options = [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
    {
      label: 'Option 4',
      value: 4,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
