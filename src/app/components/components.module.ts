import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdvetDialogComponent } from './advet-dialog/advet-dialog.component';
import { OurTeamComponent } from './header-pages/about_us/our-team/our-team.component';
import { OurValuesComponent } from './header-pages/about_us/our-values/our-values.component';
import { OurStoryComponent } from './header-pages/about_us/our-story/our-story.component';
import { InvestmentCommisionComponent } from './header-pages/about_us/investment-commision/investment-commision.component';
import { InvestUsComponent } from './header-pages/investor/invest-us/invest-us.component';
import { InvestProcessComponent } from './header-pages/investor/invest-process/invest-process.component';
import { InvestPortalComponent } from './header-pages/investor/invest-portal/invest-portal.component';
import { InvestAppComponent } from './header-pages/investor/invest-app/invest-app.component';
//import { InvestFAQComponent } from './header-pages/investor/invest-faq/invest-faq.component';
import { ProjectComponent } from './header-pages/current-projects/project/project.component';
import { BlogComponent } from './header-pages/news-insights/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutAsComponent } from '../pages/about-as/about-as.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEnquiryComponent } from './header-pages/current-projects/add-enquiry/add-enquiry.component';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ScrollViewModule } from "@progress/kendo-angular-scrollview";
import { ViewImageComponent } from './header-pages/current-projects/view-image/view-image.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvestFAQComponent } from './header-pages/investor/invest-faq/invest-faq.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ViewBlogComponent } from './view-blog/view-blog.component';
@NgModule({
  declarations: [
    AdvetDialogComponent,
    FooterComponent,
    OurTeamComponent,
    OurValuesComponent,
    OurStoryComponent,
    InvestmentCommisionComponent,
    InvestUsComponent,
    InvestProcessComponent,
    InvestPortalComponent,
    InvestAppComponent,
    InvestFAQComponent,
    ProjectComponent,
    BlogComponent,
    HomeComponent,
    AboutAsComponent,
    AddEnquiryComponent,
    ViewImageComponent,
    AppLoaderComponent,
    ContactUsComponent,
    ViewBlogComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
   
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    ScrollViewModule,
    NgxSpinnerModule,
    NgbModule,
    MatTabsModule,
    SlickCarouselModule,

  ]
})
export class ComponentsModule { }
