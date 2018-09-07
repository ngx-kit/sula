import { Component, OnInit } from '@angular/core';
import { UiNotificationPosition } from '../meta';
import { UiNotificationService } from '../ui-notification.service';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-notification-demo.component.html',
  styleUrls: ['./ui-notification-demo.component.scss'],
})
export class UiNotificationDemoComponent implements OnInit {

  constructor(private notification: UiNotificationService) {
  }

  ngOnInit() {
  }

  open(params?: any) {
    this.notification.open({title: 'hello', message: 'there', ...params});
  }

  openWithDuration(duration: number) {
    this.notification.config({duration});
    this.notification.open({message: 'Just an another message'});
  }

  openWithPosition(position: UiNotificationPosition) {
    this.notification.config({position});
    this.notification.open({message: 'Sided message'});
  }
}
