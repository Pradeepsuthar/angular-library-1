
import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { TabComponent } from './pn2-tab.component';


@Component({
  selector: 'pn2-tabs',
  template: `
    <!-- <ul class="nav nav-tabs nav-line-tabs my-5 fs-6 fw-bolder" [ngClass]="addClass.length > 0 ? addClass : ''">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="nav-item cursor-pointer" [ngClass]="addChildListClass.length > 0 ? addChildListClass : ''">
        <a class="nav-link p-3 m-0" [class.active]="tab.active" [ngClass]="addChildLinkClass.length > 0 ? addChildLinkClass : ''">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content> -->




    <div class="tabs">
      <div class="index" [ngClass]="addClass.length > 0 ? addClass : ''" [ngClass]="addChildListClass.length > 0 ? addChildListClass : ''">
        <ng-container *ngFor="let tab of tabs">
            <a (click)="selectTab(tab)" [class.active]="tab.active" [ngClass]="addChildLinkClass.length > 0 ? addChildLinkClass : ''" [ngStyle]="{width: tabs.length == 1 ? 'auto' : '100%'}">{{tab.title}}</a>
        </ng-container>
      </div>
      <div class="contents" *ngIf="tabs.length">
      <ng-content></ng-content>
      </div>
    </div>




  `,
  styles: [`.tabs {
    .index {
      display: flex;
      justify-content: space-between;
      * {
        padding: 10px 20px;
        position: relative;
        top: 1px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        text-align: center;
        text-wrap: nowrap;
        font-weight: 500 !important;
        color: #7e8299;
        font: 400 14px / 20px Roboto, Helvetica Neue, sans-serif;
        transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        &:hover {
          color: #3ba68c;
          border-bottom: 2px solid #3ba68c;
          transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        }
      }
      .active {
        background-color: initial;
        border: 0;
        color: #3ba68c;
        border-bottom: 2px solid #3ba68c;
        transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
      }
    }
    .contents {
      padding: 12px;
    }
  }`]
})
export class Pn2TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @Input() addClass: string = '';
  @Input() addChildListClass: string = '';
  @Input() addChildLinkClass: string = '';
  @Output() activeTabChanged = new EventEmitter<Object>();

  // contentChildren are set
  ngAfterContentInit() {
   setTimeout(() => {
     // get all active tabs
     let activeTabs:any[] = this.tabs.filter((tab) => tab.active);

     // if there is no active tab set, activate the first
     if (activeTabs.length === 0) {
       this.selectTab(this.tabs.first);
     }
   }, 0);
  }

  selectTab(tab: any) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
    
    // console.log("tab", tab)
    this.activeTabChanged.emit(JSON.parse(JSON.stringify(tab)));
  }
}
