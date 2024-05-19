import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template: `
    <form [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
        <field-builder [field]="field" [form]="form"></field-builder>
      </div>
    </form>
  `,
})

export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() isSubmit: boolean = false;
  form!: UntypedFormGroup;
  constructor() {}

  ngOnInit() {
    let fieldsCtrls: any = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new UntypedFormControl(
          { value: f.value || '', disabled: f.isDisabled ? true : false },
          Validators.required
        );
      } else {
        let opts: any = {};
        for (let opt of f.options) {
          opts[opt.key] = new UntypedFormControl(opt.value);
        }
        fieldsCtrls[f.name] = new UntypedFormGroup(opts);
      }
    }
    this.form = new UntypedFormGroup(fieldsCtrls);
  }

  ngOnChanges() {
    if (this.isSubmit) {
      this.onSubmit.emit(this.form.value);
    }
  }
}