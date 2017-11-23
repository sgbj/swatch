import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PaletteComponent } from './palette/palette.component';
import { ThemeComponent } from './theme/theme.component';
import { PrismComponent } from './prism/prism.component';
import { CopyComponent } from './copy/copy.component';
import { ColorCardComponent } from './color-card/color-card.component';
import { ColorDialogComponent } from './color-dialog/color-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    PaletteComponent,
    ThemeComponent,
    PrismComponent,
    CopyComponent,
    ColorCardComponent,
    ColorDialogComponent
  ],
  entryComponents: [
    ColorDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
