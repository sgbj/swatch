import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

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

  constructor(private overlayContainer: OverlayContainer) { }

  installTheme(theme) {
    document.body.className = `${theme.className} mat-typography`;
    if (this.theme) {
      this.overlayContainer.getContainerElement().classList.remove(this.theme.className);
    }
    this.overlayContainer.getContainerElement().classList.add(theme.className);
    this.theme = theme;
  }
}
