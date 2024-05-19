import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'field-builder',
    template: `
    <div class="dynamic-form-group" [formGroup]="form">
      <label class="dynamic-form-control-label" [attr.for]="field.label">
        <span>{{ field.label }}
        <strong class="text-danger" *ngIf="field.required">*</strong></span>
        <small class="text-warning" *ngIf="field.info">
          ( {{ field.info }} )</small
        >
      </label>
      <div class="dynamic-form-container" [ngSwitch]="field.type">
        <date-picker
          *ngSwitchCase="'datetime'"
          [field]="field"
          [form]="form"
        ></date-picker>
        <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
        <textbox
          *ngSwitchCase="'password'"
          [field]="field"
          [form]="form"
        ></textbox>
        <textbox
          *ngSwitchCase="'email'"
          [field]="field"
          [form]="form"
        ></textbox>
        <textbox *ngSwitchCase="'number'" [field]="field" [form]="form">
        <!-- Inside the <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox> -->
          <ng-container *ngIf="field.step !== undefined">
            <input matInput
                  type="number"
                  [step]="field.step"
                  [placeholder]="field.placeholder"
                  [formControlName]="field.name"
                  [required]="field.required">
            <p *ngIf="!isValid && isDirty">
              {{ field.label }} is required and should be a decimal number with up to two decimal places.
            </p>
          </ng-container>
          <ng-container *ngIf="field.step === undefined">
            <input
                  type="number"
                  [placeholder]="field.placeholder"
                  [formControlName]="field.name"
                  [required]="field.required">
            <p *ngIf="!isValid && isDirty">
              {{ field.label }} is required and should be a decimal number with up to two decimal places.
            </p>
          </ng-container>

        </textbox>
        <dropdown
          *ngSwitchCase="'dropdown'"
          [field]="field"
          [form]="form"
        ></dropdown>
        <checkbox
          *ngSwitchCase="'checkbox'"
          [field]="field"
          [form]="form"
        ></checkbox>
        <!-- <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file> -->
        <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
        <div
          class="alert alert-danger my-1 p-2 fadeInDown animated"
          style="color: red"
          *ngIf="!isValid && isDirty"
        >
          {{ field.label }} is required
        </div>
      </div>
    </div>
  `,
    styles: [`
        label.dynamic-form-control-label {
            font-family: sans-serif;
            display: inline-grid;

            small {
                margin: 5px 0 0 0;
            }
        }

        .text-warning{
            color: orange;
        }

        .text-danger {
            color: red;
        }
  `]
})
export class FieldBuilderComponent implements OnInit {
    @Input() field: any;
    @Input() form: any;

    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }

    constructor() { }

    ngOnInit() { }
}