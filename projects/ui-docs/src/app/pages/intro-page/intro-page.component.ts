import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
