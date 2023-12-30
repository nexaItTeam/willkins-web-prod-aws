import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NavebarComponent } from './components/navebar/navebar.component';
import { MenuModule } from "@progress/kendo-angular-menu";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    //ContactUsComponent,
    
  ],
  imports: [
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MenuModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
