import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstService } from './first.service';
import { AppRoutingModule } from './/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
