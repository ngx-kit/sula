import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiThemeService } from 'ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter<void>();

  constructor(
    private theme: UiThemeService,
  ) {
  }

  ngOnInit() {
  }

  toggleTheme(isDark: boolean) {
    this.theme.theme = isDark ? 'dark' : null;
    console.log('IS DARK', isDark);
  }
}
