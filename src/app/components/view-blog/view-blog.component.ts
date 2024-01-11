import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewBlogComponent {
  public result: any
  public blogInfo: any
  public blogId!: number | string | any
  constructor(public sanitizer: DomSanitizer, public spinner: NgxSpinnerService,
    private _commonService: CommonService,
    private router: ActivatedRoute,) {

    this.router.paramMap.subscribe((params) => {
      this.blogId = params.get('queryParams')
    })
    this.getBlogList()
  }
//get all blog data and sanitize the data to render on html
  getBlogList() {

    var blogData
    this.spinner.show();
    this._commonService.getBlogData().subscribe({
      next: (res: any) => {

        blogData = res.getAllBlog.rows;


        this.blogInfo = blogData.filter((element: any) => element.id == this.blogId)
        this.blogInfo = this.sanitizer.bypassSecurityTrustHtml(this.blogInfo[0].blog_desc)
        console.log(this.blogInfo)
        this.spinner.hide()
      },
      error: (err: any) => {
        alert('error from server side');
        this.spinner.hide();
      }
    });
  }
}
