import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CanonicalService } from 'src/app/shared/canonical.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta, private router: Router, private canonicalService:CanonicalService) {
    this.title.setTitle('Asset Management Company For Quality Investments: Wellkins Capital');

    this.meta.updateTag({
      name: 'description'
      , content: 'Ready to secure your financial future? Partner with our registered Asset management Company for premium returns and adjusted risks. Invest Now!',
    });

   this.canonicalService.createCanonicalURL()
  }
  ngOnInit(): void {

  }
}
