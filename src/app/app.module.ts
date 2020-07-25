import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodImagesComponent } from './food-all-images/food-images.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxStarsModule } from 'ngx-stars';
import { FoodClickedComponent } from './food-clicked-images/food-clicked.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodImagesComponent,
    FoodClickedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
