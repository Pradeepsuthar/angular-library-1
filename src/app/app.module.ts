import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prismanote2Module } from 'dist/Prismanote2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Prismanote2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
