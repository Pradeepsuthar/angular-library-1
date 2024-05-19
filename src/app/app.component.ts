import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prismanote2-workspace';

  tabTitles: any[] = [
    { title: "Purchase orders", key: 'purchases', active: true },
    { title: "Statistics", key: 'coreStatistics', active: false },
    { title: "Contact persons", key: 'contactPersons', active: false },
    { title: 'Premium graphs', key: 'statistics-graph', active: false },
  ];

  onClick(type:string){
    console.log("clicked", type);
  }

  activeTabsChanged(tab: any) {
    console.log("active tab",tab);
  }
}
