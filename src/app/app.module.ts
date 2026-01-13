import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { AccountComponent } from './account/account.component';
import { PlantdetailsComponent } from './plantdetails/plantdetails.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdialogComponent } from './taskdialog/taskdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantsComponent,
    AccountComponent,
    PlantdetailsComponent,
    LoginComponent,
    TasksComponent,
    TaskdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
