// import { Component, Input } from '@angular/core';
// import { UntypedFormGroup } from '@angular/forms';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'file',
//   template: `
//     <div [formGroup]="form">
//       <div [formGroupName]="field.name">
//         <input type="file" (change)="field.onUpload($event, field.name)" />
//         <div *ngIf="field.isAvailable">
//           <!-- <button type="button" class="btn btn-primary">Change</button> -->
//           <div style="margin-top: 5px;">
//             <img
//               class="card-img-top"
//               [src]="baseURL + field.value"
//               width="40px"
//               height="40px"
//               style="border-radius: 4px; object-fit: cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   `,
// })
// export class FileComponent {
//   @Input() field: any = {};
//   @Input() form!: UntypedFormGroup;

//   baseURL: string = environment.baseURL;
//   constructor() {}
//   get isValid() {
//     return this.form.controls[this.field.name].valid;
//   }
//   get isDirty() {
//     return this.form.controls[this.field.name].dirty;
//   }
// }