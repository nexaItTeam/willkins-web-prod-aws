import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private title: Title, private meta: Meta){
  this.title.setTitle('Wellkins Capital');
  //alert("Site will be under scheduled Maintenance from 20-Aug-2023 (16:00 AEST) to 22-Aug-2023 (20:00 AEST) ")
}
ngOnInit(): void {
  
}
}
