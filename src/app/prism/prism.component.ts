import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prism',
  templateUrl: './prism.component.html',
  styleUrls: ['./prism.component.scss']
})
export class PrismComponent implements AfterViewInit {
  @Input() language: string;
  @ViewChild('raw') raw: ElementRef;
  @ViewChild('code') code: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.code.nativeElement.innerHTML = this.raw.nativeElement.innerHTML.trim();
    Prism.highlightElement(this.code.nativeElement);
  }

  onContentChanged() {
    this.code.nativeElement.innerHTML = this.raw.nativeElement.innerHTML.trim();
    Prism.highlightElement(this.code.nativeElement);
  }
}
