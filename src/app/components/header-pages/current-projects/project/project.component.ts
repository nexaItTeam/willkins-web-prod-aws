import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { AddEnquiryComponent } from '../add-enquiry/add-enquiry.component';
import { MatDialog } from '@angular/material/dialog';
import { AppPreference } from "../../../../shared/app-preference";
import { ViewImageComponent } from '../view-image/view-image.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public property: any


  public propertyImage:any
 
  constructor(
    public appPreference: AppPreference,
    private _dialog: MatDialog,
    private _commonService: CommonService,
    public spinner:NgxSpinnerService,
    public route:Router,
    private title: Title
  ) {
    this.title.setTitle('Wellkins Capital');
   }
 

  ngOnInit(): void {
    this.getPropertyImage()
    this.getPropertyLists();
  
  
  }

  getPropertyLists() {
    
    this.spinner.show()
    this._commonService.getPropertyList().subscribe({
      next: (res: any) => {
       
       
        this.property = res.getAll.rows;
        this.property.sort((a:any,b:any) => {
         
          if (a.status == "Trending" ) return -1;
        
          if(a.status == "Upcoming" && b.status !="Trending") return -1;
          if(a.status == "Closed" && b.status !="Upcoming" && b.status !='Trending') return -1;
        
 
           return 0;
       });
        this.spinner.hide()
      },
      error: console.log,
     
    });
  }
  onEnquiryClick(data: any) {
    const dialogRef = this._dialog.open(AddEnquiryComponent,{data});
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {

        }
      },
    });
  }
  onpropertyClick(data: any) {

    
   
    this.route.navigate(['view-current-project',{ queryParams:data.id}])
  }
   public getPropertyImage(){
    let body = {
      "prop_id": null
  }
 

var result =   this._commonService
.getPropertyImage(body)
.subscribe({
  next: (val: any) => {
   
   
    this.propertyImage=val.data
  },
  error: (err: any) => {
    alert('Something went wrong!');
  },
});

} 
}
