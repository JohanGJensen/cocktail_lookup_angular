import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailModule } from './cocktail/cocktail.module';
import { ToolbarModule } from './toolbar/toolbar.module';
// import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CocktailModule,
    ToolbarModule
    // AppRoutingModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
