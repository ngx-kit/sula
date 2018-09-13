import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiThemeService {
  private _theme: string | null = null;

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {
  }

  set theme(theme: string | null) {
    if (this.document && this.document.documentElement) {
      if (this._theme) {
        this.document.documentElement.classList.remove(`theme-${this._theme}`);
      }
      if (theme) {
        this.document.documentElement.classList.add(`theme-${theme}`);
        this._theme = theme;
      }
    }
  }
}
