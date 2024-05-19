
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pn2-tab',
  template: `
    <div [ngClass]="{'active' : active}" class="tab-pane" >
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab-pane {
      display: none;
    }
    .tab-pane.active {
      display: block;
    }
  `]
})
export class TabComponent {
  @Input('key') key: string = '';
  @Input('tabTitle') title: string = '';
  @Input() active:boolean = false;
}
