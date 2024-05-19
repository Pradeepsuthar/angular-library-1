import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pn2TempRef]'
})
export class TempRefDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}

}