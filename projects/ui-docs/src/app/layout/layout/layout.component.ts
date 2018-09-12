import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UiScrollComponent } from 'ui';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  displayNav = false;

  @ViewChild('contentScroll') contentScroll: UiScrollComponent;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.displayNav = false;
        // Scroll content to top
        this.contentScroll.scrollTop();
      }
    });
  }
}
