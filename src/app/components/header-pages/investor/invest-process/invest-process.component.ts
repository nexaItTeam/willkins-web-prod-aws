import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-invest-process',
  templateUrl: './invest-process.component.html',
  styleUrls: ['./invest-process.component.scss']
})
export class InvestProcessComponent {
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  constructor(private title: Title, private meta: Meta,private canonicalService:CanonicalService){
    this.title.setTitle('Discover the Benefits of Investing with Wellkins Capital');
    this.meta.updateTag({
      name: 'description'
      , content:'Explore our current projects and seize the chance to invest in a promising opportunity. Discover why this project is worth your attention.' ,  
  });
  this.canonicalService.createCanonicalURL()
  }
}
