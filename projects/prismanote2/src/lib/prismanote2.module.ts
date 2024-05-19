import { NgModule } from '@angular/core';
import { Prismanote2Component } from './prismanote2.component';
import { Pn2ButtonComponent } from './components/pn2-button/pn2-button.component';
import { CommonModule } from '@angular/common';
import { Pn2TabsComponent } from './components/pn2-tabs/pn2-tabs.component';
import { TempRefDirective } from './directives/temp-ref.directive';
import { TabComponent } from './components/pn2-tabs/pn2-tab.component';



@NgModule({
  declarations: [
    Prismanote2Component,
    Pn2ButtonComponent,
    Pn2TabsComponent,
    TempRefDirective,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Prismanote2Component,
    Pn2ButtonComponent,
    Pn2TabsComponent,
    TempRefDirective,
    TabComponent
  ]
})
export class Prismanote2Module { }
