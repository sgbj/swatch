import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  elevation = 16;
  type = 'display-4';
  typography = [
    'display-4',
    'display-3',
    'display-2',
    'display-1',
    'headline',
    'title',
    'subheading-2',
    'subheading-1',
    'body-2',
    'body-1',
    'caption',
    'button',
    'input',
  ];

  constructor() { }

  ngOnInit() {
  }

}
