import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen/meta';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { highlightAuto } from 'highlight.js';
import { UiTabsComponent } from 'ui';
import { demoComponentsRef } from '../../../../ui/src/lib/demo.module';

@Component({
  selector: 'app-module-demo',
  templateUrl: './module-demo.component.html',
  styleUrls: ['./module-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleDemoComponent implements OnChanges {
  @Input() declar: DocGen.ClassDeclar;

  @Input() sources: DocGen.File[];

  class: any;

  code: {[key: string]: string} = {};

  @Input() demo: {files: {name: string, ext: string; content: string; class: string}[]};

  @Input() inverted: boolean;

  readme: string;

  @ViewChild('tabs') tabs: UiTabsComponent;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    if (this.declar) {
      const cmp = demoComponentsRef.find(d => d[0] === this.declar.name);
      if (!cmp) {
        throw new Error(`Class ${this.declar.name} not found in demo-ref`);
      }
      this.class = cmp[1];
      if (this.sources) {
        this.code = this.sources.reduce((prev: any, file: DocGen.File) => ({
          ...prev,
          [file.fileName]: highlightAuto(file.text, [this.getLangByExt(file.type)]).value,
        }), {});
      }
      // Switch to preview tab
      this.tabs.active = 1;
    }
  }

  getLangByExt(ext: string) {
    switch (ext) {
      case 'ts':
        return 'typescript';
      case 'css':
        return 'css';
      case 'html':
        return 'html';
    }
    return ext;
  }

}
