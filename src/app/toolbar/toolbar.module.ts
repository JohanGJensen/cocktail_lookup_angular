import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [MatToolbarModule, MatInputModule, BrowserModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule { }
