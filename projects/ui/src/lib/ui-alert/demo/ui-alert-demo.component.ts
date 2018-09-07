import { Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-alert-demo.component.html',
  styleUrls: ['./ui-alert-demo.component.scss'],
})
export class UiAlertDemoComponent implements OnInit {
  isOpen1 = true;
  isOpen2 = true;
  isOpen3 = true;
  isOpen4 = true;
  isOpen5 = true;
  isOpen6 = true;

  constructor() {
  }

  ngOnInit() {
  }
}
