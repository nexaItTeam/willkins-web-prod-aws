import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent {
  constructor(private scroller: ViewportScroller,private title: Title, private meta: Meta){
    this.title.setTitle('Licensed Australian Retail Investor Fund Manager - Wellkins Capital');
    this.meta.updateTag(
      {name: 'description'
      , content:"Australia's dynamic and innovative investment company with 30 to 40 years of experience in banking, fund management, and investment management." },  
    );
  }
  public   show1 = false;
  public   show2 = false;
  public   show3 = false;
  selectedTabChange(event:any){
  }
  goDown1() {
   // this.scroller.scrollToAnchor("our_value");
   document.getElementById("our_value")!.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  }
  goDown2() {
    // this.scroller.scrollToAnchor("our_value");
    document.getElementById("our_team")!.scrollIntoView({
     behavior: "smooth",
     block: "start",
     inline: "nearest"
   });
   }
}
