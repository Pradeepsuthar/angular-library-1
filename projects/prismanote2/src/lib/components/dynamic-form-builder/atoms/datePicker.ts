import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'date-picker',
  template: `
    <div [formGroup]="form" style="margin: 20px 0;">
      <input
        type="date"
        class="dynamic-form-control"
        [formControlName]="field.name"
        [id]="field.name"
      />
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
export class DatePickerComponent {
  @Input() field: any = {};
  @Input() form!: UntypedFormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() { }
}