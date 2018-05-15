import { Component } from '@angular/core';

@Component({
  templateUrl: './ui-autocomplete-demo.component.html',
  styleUrls: ['./ui-autocomplete-demo.component.scss'],
})
export class UiAutocompleteDemoComponent {
  value: string;

  value2: string;

  value3: string;

  value4: string;

  value5: string;

  value6: string;

  options: string[];

  data: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  searchOptions(query: string) {
    this.options = query
      ? this.data.filter(d => d.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }
}
