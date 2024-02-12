import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
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
    private router: ActivatedRoute, private title: Title, private meta: Meta) {

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
        this.title.setTitle(this.blogInfo[0].page_title);
        this.meta.updateTag(
          { name: 'Wellkins Capital', content: this.blogInfo[0].pagemeta_desc },

        );
        this.blogInfo = this.sanitizer.bypassSecurityTrustHtml(this.blogInfo[0].blog_desc)

        this.spinner.hide()
      },
      error: (err: any) => {
        alert('error from server side');
        this.spinner.hide();
      }
    });
  }
}
