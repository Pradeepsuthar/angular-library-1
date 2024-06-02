import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { EndDate, StartDate } from 'ngx-daterangepicker-material/daterangepicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'prismanote2-workspace';


  constructor(private cdr: ChangeDetectorRef) {

  }

  tabTitles: any[] = [
    { title: "Purchase orders", key: 'purchases', active: true },
    { title: "Statistics", key: 'coreStatistics', active: false },
    { title: "Contact persons", key: 'contactPersons', active: false },
    { title: 'Premium graphs', key: 'statistics-graph', active: false },
  ];

  onClick(type: string) {
    console.log("clicked", type);
    if (type === 'formSubmit') {
      console.log("Form data:", this.formData)
    }
  }

  activeTabsChanged(tab: any) {
    console.log("active tab", tab);
  }

  servicesType: any[] = [
    {
      key: 1,
      label: 'Test data one',
    }
  ]

  genderOptions: any[] = [
    {
      key: 'male',
      label: 'Male',
    },
    {
      key: 'female',
      label: 'Female',
    },
    {
      key: 'other',
      label: 'Other',
    },
  ]

  formFields: any[] = [
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
      type: 'radio',
      name: 'pan',
      label: 'Do you have Pan card?',
      value: '',
      required: false,
      options: [
        {
          key: 'yes',
          label: 'Yes'
        },
        {
          key: 'no',
          label: 'No'
        },
      ],
    },
    {
      type: 'dropdown',
      name: 'gender',
      label: 'Gender',
      value: '',
      required: true,
      options: this.genderOptions,
    },
    {
      type: 'datetime',
      name: 'startDate',
      label: 'Start Date & Time',
      value: '',
      required: true,
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
  formData: any = {};
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













  selected: any = {
    startDate: moment('2024-06-01'), // Default start date
    endDate: moment('2024-07-31')    // Default end date
  };

  locale: any = {
    format: 'MM/DD/YYYY',
    customRangeLabel: 'Custom Range',
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    firstDay: 1
  };

  specialDates = [
    { date: moment('2024-06-05'), label: 'Kasa-1', id: 'kdshfkjdshfhdjfhskdfhdsf' },
    { date: moment('2024-06-07'), label: 'Kasa-2', id: 'tughdgsfkjdhjkfhdfsviyer' },
    { date: moment('2024-06-09'), label: 'Kasa-3', id: 'qwegjhkkdjhfdksfkdjfhkdf' },
    { date: moment('2024-06-10'), label: 'Kasa-4', id: 'bjhvgsjtuytgkhgkjdfdsfff' },
    { date: moment('2024-07-31'), label: 'Kasa-5', id: 'popiihckbkjhgkkjsdhkjhkf' },
  ];


  nFirstMonth!: number;
  nSecondMonth!: number;


  oCalendar: any = {
    first: {
      nMonth: 0,
      nYear: 0,
      nDay: 0,
    },
    second: {
      nMonth: 0,
      nYear: 0,
      nDay: 0,
    },
  }

  ngAfterViewInit() {
    // this.updateMonths();
    this.highlightSpecialDates();

    const firstCalendarNextButton = document.querySelector('.calendar.left .calendar-table .table-condensed .next');
    const firstCalendarPrevButton = document.querySelector('.calendar.left .calendar-table .table-condensed .prev');
    firstCalendarNextButton?.addEventListener('click', () => this.highlightSpecialDates());
    firstCalendarPrevButton?.addEventListener('click', () => this.highlightSpecialDates());

    const secondCalendarNextButton = document.querySelector('.calendar.right .calendar-table .table-condensed .next');
    const secondCalendarPrevButton = document.querySelector('.calendar.right .calendar-table .table-condensed .prev');
    secondCalendarNextButton?.addEventListener('click', () => this.highlightSpecialDates());
    secondCalendarPrevButton?.addEventListener('click', () => this.highlightSpecialDates());
  }

  updateMonths() {
    const leftCalMonth = moment(document.querySelector('.calendar.left .month')?.textContent).month();
    this.oCalendar.first.nMonth = leftCalMonth;
    const rightCalMonth = moment(document.querySelector('.calendar.right .month')?.textContent).month();
    this.oCalendar.second.nMonth = rightCalMonth;
  }

  isInvalidDate(date: any) {
    return date.weekday() === 0;
  }

  eventClicked(e: StartDate | EndDate): void {
    // eslint-disable-next-line no-console
    console.log({ ['eventClicked()']: e });
  }

  highlightSpecialDates() {
    this.updateMonths();
    console.log("this.oCalendar", this.oCalendar)
    const firstCalendar = document.querySelector('.calendar.left');
    // const nFirstMonth = moment(document.querySelector('.calendar.left .month')?.textContent).month();
    if (firstCalendar) {
      const days = firstCalendar.querySelectorAll('.calendar-table td.available');
      const availableButOffTRs = Array.from(days).filter((tr) => !tr.classList.contains('off'));
      console.log("availableButOffTRs.length", availableButOffTRs.length)
      availableButOffTRs.forEach((day: any) => {

        // const specialDate: any = this.specialDates.find((d: any) => {
        //   if(day.innerText == d.date.date() && this.oCalendar.first.nMonth == d.date.month()) {
        //     return d;
        //   }
        // });
        // // console.log("d", specialDate)
        // if (specialDate) {
        //   day.classList.add('special-date');
        //   day.innerHTML += `<div class="label" style="color: rgb(59, 166, 140);font-size: 10px;" id="${specialDate.id}">${specialDate.label}</div>`;
        //   day.addEventListener('click', this.onDateClick)
        //   console.log(day)
        // }else{
        //   // const selectText = document.querySelector('.special-date');
        //   // console.log(selectText)
        //   // day.classList.remove('special-date');
        //   // day.innerHTML += `<div class="label" style="color: red;font-size: 10px;">${'pradeep'}</div>`;
        //   // document.getElementById(specialDate.id)?.remove();
        // }





        this.specialDates.forEach(d => {
          if (day.innerText == d.date.date() && this.oCalendar.first.nMonth == d.date.month()) {
            // console.log("element", d);
            day.classList.add('special-date');
            day.innerHTML += `<div class="label" style="color: rgb(59, 166, 140);font-size: 10px;" id="${d.id}">${d.label}</div>`;
            day.addEventListener('click', this.onDateClick)
          }else{
            // day.classList.remove('special-date');
            // day.innerHTML += `<div class="label">${day.innerText}</div>`;
            // day.innerHTML += day.innerText;
            console.log(day.innerText)
          }
        });




      });
    }

    // for right

    const secondCalendar = document.querySelector('.calendar.right');
    // const nSecondMonth = moment(document.querySelector('.calendar.right .month')?.textContent).month();
    if (secondCalendar) {
      const days = secondCalendar.querySelectorAll('.calendar-table td.available');
      const availableButOffTRs = Array.from(days).filter((tr) => !tr.classList.contains('off'));
      availableButOffTRs.forEach((day: any) => {
        const specialDate = this.specialDates.find((d: any) => day.innerText == d.date.date() && this.oCalendar.second.nMonth == d.date.month());
        if (specialDate) {
          day.classList.add('special-date');
          day.innerHTML += `<div class="label" style="color: rgb(59, 166, 140);font-size: 10px;" id="${specialDate.id}">${specialDate.label}</div>`;
          day.addEventListener('click', this.onDateClick)
        }
      });
    }
  }

  bIsShowTooltip: boolean = false;
  openData: any = { id: '' };
  onDateClick(event: any) {
    if (event && event?.target && event?.target?.id) {
      this.openData = {
        id: event?.target?.id
      };
    }
    this.bIsShowTooltip = true;
    console.log('date click', this.openData, this.bIsShowTooltip)
  }


  onHover(data: any) {
    console.log("hover", data)
  }


  onSelectDateRange(date: any) {
    console.log('[datesUpdated] is : ', date);
  }
  choosedDate(date: any) {
    console.log('[choosedDate] is : ', date);
  }

  rangeClicked(range: any) {
    console.log('[rangeClicked] range is : ', range);
  }


  onDateHover(event: MouseEvent) {
    // Handle mouse enter on date
    console.log('Mouse enter on date:', event);
  }

  onDateHoverEnd(event: MouseEvent) {
    // Handle mouse leave from date
    console.log('Mouse leave from date:', event);
  }
}
