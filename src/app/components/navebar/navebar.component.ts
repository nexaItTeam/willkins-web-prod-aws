import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent {
  public items: any[];
  public isCollapsed = true;
  private lastPoppedUrl: string | undefined;
    private yScrollStack: number[] = [];
  constructor(private router: Router, public location: Location,) {
    
    const selectedRoutes = router.config.slice(0,6)
    this.items = this.mapItems(selectedRoutes);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
         if (event.url != this.lastPoppedUrl)
             this.yScrollStack.push(window.scrollY);
     } else if (event instanceof NavigationEnd) {
         if (event.url == this.lastPoppedUrl) {
             this.lastPoppedUrl = undefined;
             //window.scrollTo(0, this.yScrollStack.pop());
         } else
             window.scrollTo(0, 0);
     }
   });
   this.location.subscribe((ev:PopStateEvent) => {
       this.lastPoppedUrl = ev.url;
   });
  }
   /* public items: any[] = [
    {
      text: 'Home',
      path:""
  },
    {
        text: 'About US',
        items: [{ text: 'Our Story' ,path:"our-values" },{ text: 'Our Values' ,path:"our-values" }, { text: 'Our Team', items: [{ text: 'NSW', path:"our-values"}, { text: 'VIC', path:"our-values" }] },{ text: 'Investment & Compliance Commision' ,path:"our-values" }]
    },
    {
        text: 'INVESTMENT',
        items: [{ text: 'Why Invest With Us' }, { text: 'Investment process' }, { text: 'Investment Portal' },{ text: 'Investment App' },{ text: 'FAQs' }]
    },
    {
        text: 'Current Projects'
    },
    {
      text: 'News & Insights',
      items: [{ text: 'Blog' } ]
  }
]; */
public onSelect({ item }:any): void {
 
  if (!item.items) {
      this.router.navigate([ item.path ]);
  }
}

private mapItems(routes: any[], path?: string): any[] {
  return routes.map(item => {
      const result: any = {
          text: item.text,
          path: (path ? `${ path }/` : '') + item.path
      };

      if (item.children) {
          result.items = this.mapItems(item.children, item.path);
      }

      return result;
  });
}




}
