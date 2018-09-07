import { Component, OnInit, ChangeDetectionStrategy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-module-page-decorator-field',
  templateUrl: './module-page-decorator-field.component.html',
  styleUrls: ['./module-page-decorator-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulePageDecoratorFieldComponent implements OnInit, OnChanges {
  @Input() decorator: any;

  @Input() title: string;

  @Input() key: string;

  field: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.field = this.decorator[this.key] || undefined;
  }
}
