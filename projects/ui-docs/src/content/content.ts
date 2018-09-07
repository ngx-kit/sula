import { Injectable } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen/meta';
import * as rawUiContent from './ui.json';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  content: DocGen.Doc = rawUiContent.default as any;

  getModuleFiles(name: string) {
    return this.content.files.filter(file => {
      return file.fileName.indexOf(`lib/${name}/`) === 0;
    });
  }

  getDocFiles() {
    return this.content.files
      .filter(file => file.type === 'md')
      .filter(file => {
        return file.fileName.indexOf(`docs/`) === 0 || file.fileName.indexOf(`/`) === -1;
      }) as DocGen.MdFile[];
  }
}
