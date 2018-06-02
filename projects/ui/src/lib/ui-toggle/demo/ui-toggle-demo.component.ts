import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ui-toggle-demo.component.html',
  styleUrls: ['./ui-toggle-demo.component.scss'],
})
export class UiToggleDemoComponent implements OnInit {

  toggleModel = false;
  toggleModel2 = true;
  toggleModel3 = false;
  toggleModel4 = false;
  toggleModel5 = false;
  toggleModel6 = false;
  toggleModel7 = false;
  toggleModel8 = true;


  constructor() {
  }

  ngOnInit() {
  }

}
