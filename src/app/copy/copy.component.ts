import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('input') input: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.input.nativeElement.value = this.content.nativeElement.innerHTML;
    this.changeDetectorRef.detectChanges();
  }

  onContentChanged() {
    this.input.nativeElement.value = this.content.nativeElement.innerHTML;
  }

  onCopy() {
    this.input.nativeElement.select();
    document.execCommand('copy');
    this.snackBar.open('Copied to clipboard', null, { duration: 1000 });
  }
}
