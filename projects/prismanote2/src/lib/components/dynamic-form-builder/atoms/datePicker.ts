import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
    selector: 'date-picker',
    template: `
    <div [formGroup]="form">
      <input
        type="date"
        class="dynamic-form-control"
        [formControlName]="field.name"
        [id]="field.name"
      />
    </div>
  `,
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