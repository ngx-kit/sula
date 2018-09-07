import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private icons: KitIconsRegistryService,
  ) {
    this.icons.add([
      {name: 'menu', url: '/assets/icons/ios-menu.svg'},
      {name: 'mail', url: '/assets/icons/ios-mail.svg'},
      {name: 'logo-github', url: '/assets/icons/logo-github.svg'},
      {name: 'logo-npm', url: '/assets/icons/logo-npm.svg'},
      {name: 'logo-twitter', url: '/assets/icons/logo-twitter.svg'},
    ]);
  }

}
