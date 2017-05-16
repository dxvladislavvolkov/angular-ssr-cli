import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {NgModule, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {Subscription} from 'rxjs/Subscription';

import {AppComponent} from './app.component';

var callback = function() {
    console.log("callback");
}

var loadedCallback = function() {
    callback();
    document.removeEventListener("DOMContentLoaded", loadedCallback)
};
document.addEventListener("DOMContentLoaded", loadedCallback)

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}