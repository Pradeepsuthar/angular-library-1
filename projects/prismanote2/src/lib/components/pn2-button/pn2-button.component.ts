import { Component, Input } from '@angular/core';

@Component({
  selector: 'pn2-button',
  template: `
  <button class="btn" [ngStyle]="style">
    <ng-content></ng-content>
  </button>
  `,
  styles: [`
  .btn {
      color: #fff;
      background-color: #3ba68c;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      line-height: 1.5;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      user-select: none;
      border: 1px solid #0000;
      padding: .75rem 1.5rem;
      font-size: 1.1rem;
      border-radius: .475rem;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      margin: 0 4px;

      img {
        width: 26px;
      }
    }
  `]
})
export class Pn2ButtonComponent {

  @Input() style: any = {};

  constructor() {
  }
}
