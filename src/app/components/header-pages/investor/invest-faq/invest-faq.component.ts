import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';


@Component({
  selector: 'app-invest-faq',
  templateUrl: './invest-faq.component.html',
  styleUrls: ['./invest-faq.component.scss'],
  
})
export class InvestFAQComponent implements OnInit{

  panelOpenState = false;
  constructor(private title: Title, private meta: Meta,private canonicalService: CanonicalService){
    this.title.setTitle('Answers to Your Frequently Asked Questions');
    this.meta.updateTag({
      name: 'description'
      , content:'Find answers to common queries on our FAQ page. Get clarity on our services, investments, and more. Simplify your decision-making process today!' ,  
  });
  this.canonicalService.createCanonicalURL()
  }
  ngOnInit(): void {
    
  }
}
