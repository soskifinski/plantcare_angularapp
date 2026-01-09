import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { AccountComponent } from './account/account.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'plants', component: PlantsComponent },
{ path: 'account', component: AccountComponent, canActivate:[AuthGuard] },
{ path: 'app-tasks', component: TasksComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' } //Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
