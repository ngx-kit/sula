import { Component, OnInit } from '@angular/core';
import { KitNotificationPosition, KitNotificationService } from '@ngx-kit/core';

@Component({
  templateUrl: './ui-notification-demo.component.html',
  styleUrls: ['./ui-notification-demo.component.scss'],
})
export class UiNotificationDemoComponent implements OnInit {

  constructor(private notificationService: KitNotificationService) {
  }

  ngOnInit() {
  }

  open(params?: any) {
    this.notificationService.open({title: 'hello', message: 'there', ...params});
  }

  openWithDuration(duration: number) {
    this.notificationService.config({duration});
    this.notificationService.open({message: 'Just an another message'});
  }

  openWithPosition(position: KitNotificationPosition) {
    this.notificationService.config({position});
    this.notificationService.open({message: 'Sided message'});
  }
}
