import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'dropdown',
    template: `
    <div [formGroup]="form" style="margin: 20px 0;">
      <select
        class="dynamic-form-control"
        [id]="field.name"
        [formControlName]="field.name"
        *ngIf="!field.isMultiple"
        [disabled]="field.isDisabled"
      >
        <option value="" selected *ngIf="!field?.isMultiple">
          Choose {{ field.name }}
        </option>
        <option *ngFor="let opt of field.options" [value]="opt.key">
          {{ opt.label }}
        </option>
      </select>

      <select
        class="dynamic-form-control"
        [id]="field.name"
        [formControlName]="field.name"
        *ngIf="field.isMultiple"
        [disabled]="field.isDisabled"
        multiple
      >
        <option value="" selected *ngIf="!field?.isMultiple">
          Choose {{ field.name }}
        </option>
        <option *ngFor="let opt of field.options" [value]="opt.key">
          {{ opt.label }}
        </option>
      </select>
    </div>
  `,
    styles: [`
    .dynamic-form-control {
        width: 100%;
        display: block;
        padding: .75rem 1rem;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;
        color: #181c32;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #e4e6ef;
        appearance: none;
        border-radius: .475rem;
        box-shadow: inset 0 1px 2px rgba(51, 51, 51, .075);
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

        &:focus {
            outline: none;
            border-color: #3ba68c;
        }
    }
  `]
})
export class DropDownComponent {
    @Input() field: any = {};
    @Input() form!: UntypedFormGroup;

    constructor() { }
}