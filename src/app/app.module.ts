import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewphotosComponent } from './viewphotos/viewphotos.component';
import {HttpClientModule} from '@angular/common/http';


const myroute:Routes=[
  {
    path:"",
    component:ViewphotosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewphotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
