import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prismanote2Module } from 'dist/Prismanote2';
import { CommonModule } from '@angular/common';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Prismanote2Module,
    NgxDaterangepickerMd.forRoot({
      separator: ' / ',
      applyLabel: 'apply',
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
