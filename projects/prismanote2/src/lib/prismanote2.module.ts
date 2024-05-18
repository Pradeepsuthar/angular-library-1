import { NgModule } from '@angular/core';
import { Prismanote2Component } from './prismanote2.component';
import { Pn2ButtonComponent } from './components/pn2-button/pn2-button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    Prismanote2Component,
    Pn2ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Prismanote2Component,
    Pn2ButtonComponent
  ]
})
export class Prismanote2Module { }
