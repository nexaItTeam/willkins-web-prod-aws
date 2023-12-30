import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.scss']
})
export class AddEnquiryComponent {
  enquiryForm!: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
   
    private _dialogRef: MatDialogRef<AddEnquiryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _commonService: CommonService,
    public spinner:NgxSpinnerService
  ) {
   
   
  }

  ngOnInit(): void {
    this.enquiryForm = this._fb.group({
      "full_name": ["",Validators.required],
        "user_email":["",[Validators.required,Validators.email]] ,
        "contact_no":["",Validators.required],
        "location": ["",Validators.required],
        "description":["",Validators.required],
        "property_id": ["",]
      
    });
  }

   onFormSubmit() {
    this.spinner.show()
    if (this.enquiryForm.valid) {
      
         var body={
           "enquery": {
               "full_name": this.enquiryForm.controls['full_name'].value,
              "user_email":this.enquiryForm.controls["user_email"].value,
              "contact_no": this.enquiryForm.controls["contact_no"].value,
               "location": this.enquiryForm.controls["location"].value ,
               "description": this.enquiryForm.controls["description"].value,
              "property_id": this.data
          }
       }
         this._commonService
           .addEnquiry(body)
          .subscribe({
             next: (val: any) => {
               alert('Enquiry details Sent!');
               this.spinner.hide()
               this._dialogRef.close(true);
             },
             error: (err: any) => {
              this.spinner.hide()
              alert('Something went wrong');
             },
           });
      
    }else{
      alert("Please fill the form correctly")
      this.spinner.hide()
    }
  
  }
}
