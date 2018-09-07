import { Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-tabs-demo.component.html',
  styleUrls: ['./ui-tabs-demo.component.scss'],
})
export class UiTabsDemoComponent implements OnInit {

  tabs = [
    {tab: 'Tab 1', content: 'Tab 1 content'},
    {tab: 'Tab 2', content: 'Tab 2 content'},
    {tab: 'Tab 3', content: 'Tab 3 content'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
