import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    { path: '', component: HomeComponent }
    ,
    {
      path: 'aboutus', component: AboutusComponent
      },
      {
        path: 'user', component: UserdashboardComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
