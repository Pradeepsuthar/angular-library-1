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
    if(type==='formSubmit'){
      console.log("Form data:", this.formData)
    }
  }

  activeTabsChanged(tab: any) {
    console.log("active tab",tab);
  }






  servicesType:any[] = [
    {
      key: 1,
      label: 'Test data one',
    }
  ]

  formFields:any[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      value: '',
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email Address',
      info: "We'll not share your email address with anyone",
      value: '',
      required: false,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Mobile Number',
      info: 'Mobile number should be 10 digits',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'serviceTypeMaster',
      label: 'Service Type Master',
      value: '',
      isMultiple: true,
      required: true,
      info: 'Press ctrl+Click to select multiple',
      options: this.servicesType,
      isDisabled: false,
    },
    {
      type: 'text',
      name: 'address',
      label: 'Address',
      value: '',
      required: false,
    },
    {
      type: 'text',
      name: 'remark',
      label: 'Remark',
      value: '',
      required: false,
    },
  ];


  isSubmit: boolean = false;
  formData:any = {};
  onSubmit(data: any) {
   this.formData = data;
  }


  confirm(): void {
    this.isSubmit = !this.isSubmit;
    if (this.formData) {
      setTimeout(() => {
        console.log("this.formData", this.formData)
      }, 1000);
    }
  }


}
