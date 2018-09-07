import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen/meta';

@Component({
  selector: 'app-module-page-interface-declar',
  templateUrl: './module-page-interface-declar.component.html',
  styleUrls: ['./module-page-interface-declar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageInterfaceDeclarComponent implements OnInit, OnChanges {
  @Input() declar: DocGen.InterfaceDeclar;

  publicMembers: DocGen.Signature[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.publicMembers = this.declar && this.declar.members
      ? this.declar.members
        .filter(member => {
          // Hide internal
          if (member.isInternal) {
            return false;
          }
          return true;
        })
      : [];
  }
}
