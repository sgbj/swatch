import { Component, OnInit } from '@angular/core';

import { materialPalette } from './material-palette';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  colors = materialPalette;

  constructor() { }

  ngOnInit() {
  }

}
