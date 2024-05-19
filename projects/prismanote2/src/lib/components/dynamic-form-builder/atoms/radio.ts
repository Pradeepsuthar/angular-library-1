import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'radio',
  template: `
    <div [formGroup]="form" style="margin: 20px 0; display: flex;">
      <div class="form-check" *ngFor="let opt of field.options">
        <input class="form-check-input" type="radio" [value]="opt.key" [id]="opt.key" />
        <label class="form-check-label" [for]="opt.key">{{ opt.label }}</label>
      </div>
    </div>
  `,
  styles: [
    `.form-check {
       margin-right: 20px;
      }
    `
  ]
})
export class RadioComponent {
  @Input() field: any = {};
  @Input() form!: UntypedFormGroup;
}