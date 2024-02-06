import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
public dataSource:any
constructor( public spinner:NgxSpinnerService, private _commonService: CommonService, 
  public route:Router,private title: Title){
    this.title.setTitle("Wellkins Capital")
}
ngOnInit(): void {
  this.getBlogList();
}
//get all blog data
getBlogList() {
  this.spinner.show();
  this._commonService.getBlogData().subscribe({
    next: (res: any) => {
    
      this.dataSource = res.getAllBlog.rows;
     
      this.spinner.hide()
    },
    error: (err: any) => {
      alert('error from server side');
      this.spinner.hide();
    }
  });
}
//navigate the user to particular blog by passing id in query params
onpropertyClick(blogData:any){
  this.route.navigate(['view-blog',{ queryParams:blogData.id}])
}
}
