import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyDisplayComponent } from './giphy-display/giphy-display.component';
import { GiphyTypeInputComponent } from './giphy-type-input/giphy-type-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyDisplayComponent,
    GiphyTypeInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
