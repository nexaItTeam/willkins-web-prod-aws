import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent {
  constructor(private scroller: ViewportScroller){}
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
