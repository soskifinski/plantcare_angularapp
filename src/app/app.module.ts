import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { AccountComponent } from './account/account.component';
import { PlantdetailsComponent } from './plantdetails/plantdetails.component';
import { PlantcaredatesComponent } from './plantcaredates/plantcaredates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantsComponent,
    AccountComponent,
    PlantdetailsComponent,
    PlantcaredatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
