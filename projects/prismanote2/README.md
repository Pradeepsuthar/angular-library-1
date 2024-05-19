# Prismanote2 Exposed

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Code scaffolding

Run `ng generate component component-name --project pn2-expose` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project pn2-expose`.
> Note: Don't forget to add `--project pn2-expose` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build pn2-expose` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build pn2-expose`, go to the dist folder `cd dist/pn2-expose` and run `npm publish`.

## Running unit tests

Run `ng test pn2-expose` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## How to use in your angular application?

// app.component.html

`<pn2-tabs (activeTabChanged)="activeTabsChanged($event)">
    <ng-container *ngFor="let tab of tabTitles;">
        <pn2-tab tabTitle="{{tab.title}}" key="{{tab.key}}">
            Tab for {{tab.title}}
        </pn2-tab>
    </ng-container>
</pn2-tabs>
`

// app.component.ts

`

tabTitles: any[] = [
    { title: "Purchase orders", key: 'purchases', active: true },
    { title: "Statistics", key: 'coreStatistics', active: false },
    { title: "Contact persons", key: 'contactPersons', active: false },
    { title: 'Premium graphs', key: 'statistics-graph', active: false },
];

`

if your want to access active tab use this method.

`

activeTabsChanged(tab: any) {
    console.log("active tab : ",tab);
}

`