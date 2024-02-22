import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-invest-portal',
  templateUrl: './invest-portal.component.html',
  styleUrls: ['./invest-portal.component.scss']
})
export class InvestPortalComponent {
  constructor(private title: Title, private meta: Meta, private canonicalService: CanonicalService) {
    this.title.setTitle('Investor Portal by Wellkins Capital: Simplifying Your Investment Management!');
    this.meta.updateTag({
      name: 'description'
      , content: 'Access your investment portfolio and transactions securely and effortlessly with Wellkins Capital Investment Portal. Streamline your investments today!',
    });
    this.canonicalService.createCanonicalURL()
  }
}
