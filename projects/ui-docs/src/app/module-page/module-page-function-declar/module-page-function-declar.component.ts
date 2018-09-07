import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen/meta';

@Component({
  selector: 'app-module-page-function-declar',
  templateUrl: './module-page-function-declar.component.html',
  styleUrls: ['./module-page-function-declar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulePageFunctionDeclarComponent implements OnInit {
  @Input() declar: DocGen.FunctionDeclar;

  constructor() { }

  ngOnInit() {
  }

}
