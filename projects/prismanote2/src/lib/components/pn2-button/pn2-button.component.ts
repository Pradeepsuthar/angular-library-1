import { Component, Input } from '@angular/core';

@Component({
  selector: 'pn2-button',
  templateUrl: './pn2-button.component.html',
  styleUrls: ['./pn2-button.component.css']
})
export class Pn2ButtonComponent {

  @Input() style: any = {};

  constructor() {
  }
}
