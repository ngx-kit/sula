import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPreviewComponent implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }
}
