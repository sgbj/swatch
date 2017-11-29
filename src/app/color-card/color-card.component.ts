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
        contrastCode: `mat-color($${this.color.code}, ${+key ? `'${key}-contrast'` : `${key}-contrast`})`,
        hideContrastCode: this.color.hideContrastCode
      }
    });
  }

  get keys() {
    return this.color ? Object.keys(this.color.palette) : [];
  }

  hasKey(key) {
    return this.color && key in this.color.palette;
  }
}
