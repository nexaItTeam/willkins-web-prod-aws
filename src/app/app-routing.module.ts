import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurValuesComponent } from './components/header-pages/about_us/our-values/our-values.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { OurTeamComponent } from './components/header-pages/about_us/our-team/our-team.component';
import { OurStoryComponent } from './components/header-pages/about_us/our-story/our-story.component';
import { InvestmentCommisionComponent } from './components/header-pages/about_us/investment-commision/investment-commision.component';
import { InvestAppComponent } from './components/header-pages/investor/invest-app/invest-app.component';
import { InvestFAQComponent } from './components/header-pages/investor/invest-faq/invest-faq.component';
import { InvestPortalComponent } from './components/header-pages/investor/invest-portal/invest-portal.component';
import { InvestProcessComponent } from './components/header-pages/investor/invest-process/invest-process.component';
import { ProjectComponent } from './components/header-pages/current-projects/project/project.component';
import { BlogComponent } from './components/header-pages/news-insights/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import { ViewImageComponent } from './components/header-pages/current-projects/view-image/view-image.component';
import { AdvetDialogComponent } from './components/advet-dialog/advet-dialog.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';

/* const routes: Routes = [
  { path: '', component: OurTeamComponent },
  { path: 'our-values', component: OurValuesComponent },
  { path: 'our-values', component: OurValuesComponent },
]; */
const routes = [
  { path: '', component: HomeComponent, text: 'Home' },
 
  {
    path: 'About-US', 
    text: 'About Us',
    component: OurValuesComponent
},

  { path: 'Investment',  text: 'Investment' ,
  children: [
    
    { path: 'invest-faq', component: InvestFAQComponent , text: 'FAQs' },
    { path: 'invest-portal', component: InvestPortalComponent , text: 'Investment Portal' },
    { path: 'invest-process', component: InvestProcessComponent , text: 'Why Invest With Us' },
]  
},
  
  { path: 'current-project', component: ProjectComponent, text: 'Current Projects' },
  {
    path: 'News-Insights',
    
    text: 'News & Insights',
    component: BlogComponent
},
{ path: 'contact_us', component: ContactUsComponent, text: 'Contact Us' },
{ path: 'policy', component: OurStoryComponent,  },
{ path: 'terms', component: OurTeamComponent,  },
{ path: 'view-current-project', component: ViewImageComponent,  },

{ path: 'view-blog', component: ViewBlogComponent  },
{path: 'advertisement', component: AdvetDialogComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
