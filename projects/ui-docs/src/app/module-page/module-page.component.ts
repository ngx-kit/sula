import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen/meta';
import { ContentService } from '../../content/content';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent implements OnInit {
  name: string;

  files: DocGen.File[] = [];

  mdFiles: DocGen.MdFile[] = [];

  tsFiles: DocGen.TsFile[] = [];

  demoFile?: DocGen.TsFile;

  demoSources: DocGen.File[] = [];

  constructor(
    public content: ContentService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.files = this.content.getModuleFiles(this.name);
      // Pick md
      this.mdFiles = this.files.filter(file => file.type === 'md') as DocGen.MdFile[];
      // Pick ts
      this.tsFiles = this.files
        .filter(tsFilter)
        .filter(demoFilterFactory(false));
      // Pick demo
      const demoFiles = this.files
        .filter(tsFilter)
        .filter(demoFilterFactory(true));
      this.demoFile = demoFiles && demoFiles[0] ? demoFiles[0] : undefined;
      // Gather sources
      this.demoSources = this.demoFile
        ? this.files
          .filter(demoSourcesFilterFactory(true))
          .sort((x: DocGen.File, y: DocGen.File) => x.type === 'html' ? -1 : 1)
        : [];
      this.cdr.detectChanges();
    });
  }
}

function tsFilter(file: DocGen.File): file is DocGen.TsFile {
  return file.type === 'ts';
}

function demoFilterFactory(isDemo: boolean) {
  return (file: DocGen.TsFile) => {
    const declar = file.declars[0];
    const curr = declar && declar['isDemo'];
    return curr === isDemo;
  };
}

function demoSourcesFilterFactory(isDemo: boolean) {
  return (file: DocGen.File) => {
    const curr = file.fileName.indexOf('/demo/') !== -1;
    return curr === isDemo;
  };
}
