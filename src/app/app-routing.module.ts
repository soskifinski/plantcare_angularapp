import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'plants', component: PlantsComponent },
{ path: 'account', component: AccountComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' } //Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
