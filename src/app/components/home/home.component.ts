import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private title: Title, private meta: Meta){
  this.title.setTitle('Asset Management Company For Quality Investments: Wellkins Capital');
  this.meta.updateTag({
    name: 'description'
    , content:'Ready to secure your financial future? Partner with our registered Asset management Company for premium returns and adjusted risks. Invest Now!' ,  
});
}
ngOnInit(): void {
  
}
}
