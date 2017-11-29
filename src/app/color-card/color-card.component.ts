import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ColorDialogComponent } from '../color-dialog/color-dialog.component';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {

  @Input() color;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(key) {
    this.dialog.open(ColorDialogComponent, {
      data: {
        name: `${this.color.name} - ${key}`,
        color: this.color.palette[key],
        contrast: this.color.contrast[key],
        colorCode: `mat-color($${this.color.code}, ${key})`,
        contrastCode: this.getContrastCode(),
        hideContrastCode: this.color.hideContrastCode
      }
    });
  }
  
  getContrastCode() {
    if (this.color.code.indexOf('primary') >= 0 ||
        this.color.code.indexOf('accent') >= 0 ||
        this.color.code.indexOf('warn') >= 0) {
      return `mat-color($${this.color.code}, ${+key ? `'${key}-contrast'` : `${key}-contrast`})`;
    } else {
      return `mat-color(map-get($${this.color.code}, contrast), ${key})`;
    }
  }

  get keys() {
    return this.color ? Object.keys(this.color.palette) : [];
  }

  hasKey(key) {
    return this.color && key in this.color.palette;
  }
}
