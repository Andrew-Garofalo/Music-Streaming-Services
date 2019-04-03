import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  //Add Components to Declarations
  declarations: [
    AppComponent,
    LibraryComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //needed for [(ngModel)] 2 way binding
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
