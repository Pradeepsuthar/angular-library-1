import { NgModule } from '@angular/core';
import { Prismanote2Component } from './prismanote2.component';
import { Pn2ButtonComponent } from './components/pn2-button/pn2-button.component';
import { CommonModule } from '@angular/common';
import { Pn2TabsComponent } from './components/pn2-tabs/pn2-tabs.component';
import { TempRefDirective } from './directives/temp-ref.directive';
import { TabComponent } from './components/pn2-tabs/pn2-tab.component';
import { DynamicFormBuilderComponent } from './components/dynamic-form-builder/dynamic-form-builder.component';
import { FieldBuilderComponent } from './components/dynamic-form-builder/field-builder/field-builder.component';
import { TextBoxComponent } from './components/dynamic-form-builder/atoms/textbox';
import { DropDownComponent } from './components/dynamic-form-builder/atoms/dropdown';
import { CheckBoxComponent } from './components/dynamic-form-builder/atoms/checkbox';
import { RadioComponent } from './components/dynamic-form-builder/atoms/radio';
import { DatePickerComponent } from './components/dynamic-form-builder/atoms/datePicker';
// import { FileComponent } from './components/dynamic-form-builder/atoms/file';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const reusedComponents = {
  Prismanote2Component,
  Pn2ButtonComponent,
  Pn2TabsComponent,
  TabComponent,
  DynamicFormBuilderComponent,
  FieldBuilderComponent,
  TextBoxComponent,
  DropDownComponent,
  CheckBoxComponent,
  RadioComponent,
  DatePickerComponent,
  // FileComponent
}

@NgModule({
  declarations: [
    TempRefDirective,
    Prismanote2Component,
  Pn2ButtonComponent,
  Pn2TabsComponent,
  TabComponent,
  DynamicFormBuilderComponent,
  FieldBuilderComponent,
  TextBoxComponent,
  DropDownComponent,
  CheckBoxComponent,
  RadioComponent,
  DatePickerComponent,
  // FileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TempRefDirective,
    Prismanote2Component,
  Pn2ButtonComponent,
  Pn2TabsComponent,
  TabComponent,
  DynamicFormBuilderComponent,
  FieldBuilderComponent,
  TextBoxComponent,
  DropDownComponent,
  CheckBoxComponent,
  RadioComponent,
  DatePickerComponent,
  // FileComponent
  ]
})
export class Prismanote2Module { }
