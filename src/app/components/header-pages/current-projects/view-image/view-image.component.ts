import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit {
  enquiryForm!: FormGroup;
public imageData:any
public propertyInfo:any
public propertyId:any
public galleryImage:any
public MapImage:any
public divisionPlan:any 
public isTouch:boolean = false;
public property:any
public userAmountList=[
 
  {
    Amount: "$92,000",
  },
  {
    Amount: "$150,000",
  },
  {
    Amount: "$200,000",
  },
  {
    Amount: "$250,000",
  },
  {
    Amount: "$300,000",
  },
  {
    Amount: "$400,000",
  },
  {
    Amount: "$500,000",
  }
]
  constructor(private _fb: FormBuilder,   private router:ActivatedRoute,private _commonService: CommonService,public spinner:NgxSpinnerService){

  }

  ngOnInit(): void {
   
    this.enquiryForm = this._fb.group({
      "full_name": ["",Validators.required],
        "user_email":["",[Validators.required,Validators.email]] ,
        "contact_no":["",Validators.required],
        "location": ["",Validators.required],
        "description":[""],
        "property_id": ["",],
        "invest":['',Validators.required]
    });
    
    this.router.paramMap.subscribe((params)=>{
     
    
    this.propertyId = params.get('queryParams')
    })
  //  console.log(this.data)
  this.getPropertyLists();
    this.getPropertyImage();
    //this.showStaticImg(this.data)
  }

  public getPropertyImage(){
    debugger
    this.spinner.show()
    let body = {
      "prop_id": this.propertyId
  }
 

var result =   this._commonService
.getViewProperty(body)
.subscribe({
  next: (val: any) => {
   
    this.imageData=val.data
   if(this.imageData){
   this.getSlideImages()
   }
    this.spinner.hide()

  },
  error: (err: any) => {
  alert("error from server side")
  this.spinner.hide()
  },
});

}

public getSlideImages(){
  this.MapImage=[]
  this.galleryImage=[]
  this.divisionPlan=[]
  this.imageData.forEach((element :any) => {
    if(element.img_type == 'gallery'){
this.galleryImage.push(element)
    }else if(element.img_type == 'map'){
      this.MapImage.push(element)
    }
    else {
   this.divisionPlan.push(element)
    }
  });
}
 /* public showStaticImg(id:any){
  if (id == 42){
    this.imageData=[
{
  no:3
}
    ]
  }else if (id == 43){
    this.imageData=[
      {
        no:1
      }
          ]
  }else{
    this.imageData=[
      {
        no:2
      }
          ]
  }
 }  */
 onFormSubmit() {
  this.spinner.show()
  this.isTouch=true
  if (this.enquiryForm.valid) {
    
       var body={
         "enquery": {
             "full_name": this.enquiryForm.controls['full_name'].value,
            "user_email":this.enquiryForm.controls["user_email"].value,
            "contact_no": this.enquiryForm.controls["contact_no"].value,
             "location": this.enquiryForm.controls["location"].value ,
             "description":this.enquiryForm.controls["description"].value ,
            "property_id": this.propertyId,
            "invest":this.enquiryForm.controls["invest"].value,
            "property_name":this.propertyInfo[0].property_name

        }
     }
       this._commonService
         .addEnquiry(body)
        .subscribe({
           next: (val: any) => {
            alert('Thank You for submitting your expression of interest, an invitation will be sent to you soon.If not received, please check your junk mail.');
             this.spinner.hide()
            this.isTouch=false
            this.enquiryForm.reset()
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

}
getPropertyLists() {
  this.spinner.show()
  this._commonService.getPropertyList().subscribe({
    next: (res: any) => {
     
     
      this.property = res.getAll.rows;
     this.propertyInfo = this.property.filter((element:any) => element.id ==this.propertyId)
   
      this.spinner.hide()
    },
    error: console.log,
   
  });
}
public goToenquiry(){
  document.getElementById("enquire")!.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  }
  gotoEnquiryForm(){
    document.getElementById("enquire")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
