import { NgModule } from '@angular/core';
import {
  ObserversModule
} from '@angular/cdk/observers';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatRippleModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSliderModule,
  MatInputModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    ObserversModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    ObserversModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
