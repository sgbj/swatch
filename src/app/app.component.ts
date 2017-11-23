import { Component } from '@angular/core';

import { materialThemes } from './palette/material-palette';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Swatch';

  themes = materialThemes;

  theme = materialThemes[1];

  installTheme(theme) {
    document.body.className = `${theme.className} mat-typography`;
    this.theme = theme;
  }
}
