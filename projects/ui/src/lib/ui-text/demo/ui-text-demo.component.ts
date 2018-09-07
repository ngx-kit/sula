import { Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  selector: 'ui-ui-text-demo',
  templateUrl: './ui-text-demo.component.html',
  styleUrls: ['./ui-text-demo.component.scss'],
})
export class UiTextDemoComponent implements OnInit {
  inputModel = '';

  textareaModel = '';

  constructor() {
  }

  ngOnInit() {
  }

}
