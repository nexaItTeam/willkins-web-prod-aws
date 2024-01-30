import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-advet-dialog',
  templateUrl: './advet-dialog.component.html',
  styleUrls: ['./advet-dialog.component.scss']
})
export class AdvetDialogComponent {
  advtForm!: FormGroup;
 public arr:any=[]
  public isTouch:boolean = false;
  public userAmountList = [

    {
      Amount: "$0 - $100,000",
    },
    {
      Amount: "$100,000 - $200,000",
    },
    {
      Amount: "$200,000 - $300,000",
    },
    {
      Amount: "$300,000 - $400,000",
    },
    {
      Amount: "$400,000 - $500,000",
    },
    {
      Amount: "$500,000 or more ",
    }
  ]
  constructor(private _fb: FormBuilder,  private _commonService: CommonService,public spinner:NgxSpinnerService){

  }
  ngOnInit(): void {
   
    this.advtForm = this._fb.group({
      "full_name": ["",Validators.required],
        "user_email":["",[Validators.required,Validators.email]] ,
        "contact_no":["",Validators.required],
        "location": ["",Validators.required],
        "description":[""],
        "property_id": ["",],
        "invest":['',Validators.required],
        "fund_type":['']
    });
    
    
  }
  onFormSubmit() {
   
    this.spinner.show()
    this.isTouch=true
    if(this.arr.length !=0){
    if (this.advtForm.valid) {
      
         var body={
           "enquery": {
               "full_name": this.advtForm.controls['full_name'].value,
              "user_email":this.advtForm.controls["user_email"].value,
              "contact_no": this.advtForm.controls["contact_no"].value,
               "location": this.advtForm.controls["location"].value ,
               "description":this.advtForm.controls["description"].value ,
              "invest":this.advtForm.controls["invest"].value,
              "fund_type":this.arr.toString(),
              "property_name":null,
          }
       }
         this._commonService
           .addEnquiry(body)
          .subscribe({
             next: (val: any) => {
              alert('Thank You for submitting your expression of interest, an invitation will be sent to you soon.If not received, please check your junk mail.');
               this.spinner.hide()
              this.isTouch=false
              this.advtForm.reset()
             },
             error: (err: any) => {
             
              alert('Error from server side');
              this.spinner.hide()
             },
           });
      
    }else{
      alert("Please fill the form correctly")
      this.spinner.hide()
      this.isTouch=true
    }
    }else{
      alert("Please select atleast one fund type Ex.Property Fund")
      this.spinner.hide()
      this.isTouch=true 
    }
  }
  onChange(index: number, name: string, isChecked:any) {

    if (isChecked.checked) {
     this.arr.push(name)
    
    } else {
      var index1 = this.arr.indexOf(name);
     this.arr.splice(index1,1)
    
    }
  }
  
}
