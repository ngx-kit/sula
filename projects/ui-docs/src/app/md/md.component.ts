import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { MdRenderService } from '@nvxme/ngx-md-render';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdComponent implements OnChanges {
  html: string;

  @Input() content: string;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    this.html = this.md.render(this.content);
  }
}
