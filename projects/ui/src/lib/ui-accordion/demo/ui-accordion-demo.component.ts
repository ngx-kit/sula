import { Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-accordion-demo.component.html',
  styleUrls: ['./ui-accordion-demo.component.scss'],
})
export class UiAccordionDemoComponent implements OnInit {
  panels = [
    {title: 'Panel 1', content: 'Panel 1 content'},
    {title: 'Panel 2', content: 'Panel 2 content'},
    {title: 'Panel 3', content: 'Panel 3 content'},
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
