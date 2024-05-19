import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'textbox',
  template: `
    <div [formGroup]="form" style="margin: 20px 0;">
      <input
        *ngIf="!field.multiline"
        [attr.type]="field.type"
        class="dynamic-form-control"
        [id]="field.name"
        [formControlName]="field.name"
        [disabled]="field.isDisabled"
      />
      <textarea
        *ngIf="field.multiline"
        [class.is-invalid]="isDirty && !isValid"
        [formControlName]="field.name"
        [id]="field.name"
        rows="9"
        class="dynamic-form-control"
        [placeholder]="field.placeholder"
        [disabled]="field.isDisabled"
      ></textarea>
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
export class TextBoxComponent {
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