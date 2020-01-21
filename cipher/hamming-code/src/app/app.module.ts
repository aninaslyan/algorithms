import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';
import { CorrectComponent } from './correct/correct.component';
import { HammingService } from "./hamming.service";

@NgModule({
  declarations: [
    AppComponent,
    EncodeComponent,
    DecodeComponent,
    CorrectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     HammingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
