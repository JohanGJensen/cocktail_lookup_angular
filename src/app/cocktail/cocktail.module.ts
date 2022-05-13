import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailComponent } from './cocktail.component';

@NgModule({
  declarations: [
    CocktailComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule
  ],
  exports: [CocktailComponent],
})

export class CocktailModule { }
