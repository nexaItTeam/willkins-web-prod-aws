import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  enquiryForm!: FormGroup;
  public isTouch: boolean = false
  constructor(private _fb: FormBuilder, private _commonService: CommonService,
    public spinner: NgxSpinnerService, private title: Title
  ) {
    this.title.setTitle('Wellkins Capital');
  }
  ngOnInit(): void {
    this.enquiryForm = this._fb.group({
      "full_name": ["", Validators.required],
      "user_email": ["", [Validators.required, Validators.email]],
      "contact_no": ["", Validators.required],
      "location": ["", Validators.required],
      "description": ["", Validators.required],
      "property_id": ["",]

    });
  }
  onFormSubmit() {
    this.spinner.show()
    this.isTouch = true
    if (this.enquiryForm.valid) {

      var body = {
        "enquery": {
          "full_name": this.enquiryForm.controls['full_name'].value,
          "user_email": this.enquiryForm.controls["user_email"].value,
          "contact_no": this.enquiryForm.controls["contact_no"].value,
          "location": this.enquiryForm.controls["location"].value,
          "description": this.enquiryForm.controls["description"].value,
          "property_id": null,
          "property_name": null
        }
      }
      this._commonService
        .addEnquiry(body)
        .subscribe({
          next: (val: any) => {
            alert('Enquiry details Sent!');
            this.spinner.hide()
            this.isTouch = false
          },
          error: (err: any) => {
            alert('Something Went Wrong!');
            this.spinner.hide()
          },
        });

    } else {
      alert("Please fill the form correctly")
      this.spinner.hide()
      this.isTouch = true
    }

  }
}
