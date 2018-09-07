import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen/meta';
import { ContentService } from '../../content/content';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsPageComponent implements OnInit {
  file?: DocGen.MdFile;

  private pkg: string;

  constructor(
    public content: ContentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name: string = params['name'];
//      this.seo.setTitle(`${this.content.section}/${name}`);
      this.file = this.content.getDocFiles()
        .find(d => {
          const dName = d.meta && d.meta.title ? d.meta.title : d.name;
          return dName.toLowerCase() === name.toLowerCase();
        });
    });
  }
}
