
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import AOS from 'aos';
import {
  catchError,
  interval,
  map,
  Observable,
  of,
  retry,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
import { AdvetDialogComponent } from 'src/app/components/advet-dialog/advet-dialog.component';
import { AddEnquiryComponent } from 'src/app/components/header-pages/current-projects/add-enquiry/add-enquiry.component';

@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.scss']
})
export class AboutAsComponent {
  active = 1;
  active1 = 1;
  active2 = 1;
  divbox:any;
  showWarning:boolean =false
  subscription: any;
  fetchData$: any
  constructor(public route:Router,  private _dialog: MatDialog,) {}
 
  ngOnInit() {
    // AOS.init({disable: 'mobile'});//AOS - 2
    // AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    this.subscription = timer(0, 5000).subscribe((res) => {
      if (res) {
        this.fetchData$ = this.loadModal();
      }
    });
  }
  getData(e: any) {
     this.divbox = !this.divbox ;
     return this.setData(e);
    }
  
  
    setData(e: any){
     
    }
  
  
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      margin: 24,
      navSpeed: 700,
      navText: [' < ', ' > '],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        1366:{
          items: 4
        }
      },
      nav: true
    }
  
  navigate(){
   
  }
  onpropertyClick(data: any) {
    
      
        this.route.navigate(['view-current-project',{ queryParams:data}])
      }
      onAppClick(){
        this.showWarning= true
      }
      ngOnDestroy() {
        this.subscription.unsubscribe();
      }
      loadModal(){
        var data ={}
        const dialogRef = this._dialog.open(AdvetDialogComponent,{data});
        this.subscription.unsubscribe();
        dialogRef.afterClosed().subscribe({
          next: (val: any) => {
            this.subscription.unsubscribe();
            if (val) {
    
            }
          },
        });
      }
  }

