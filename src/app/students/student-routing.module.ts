import { IsStudentGuard } from './../guards/is-student.guard';
import { LoggedInGuard } from './../guards/logged-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './../components/pagenotfound/pagenotfound.component';
import { StudentsComponent } from './students.component';
import { RegisterComponent } from './register/register.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from '../guards/is-authenticated.guard';

const routes: Routes = [
  {path:'register',component:RegisterComponent , canActivate:[LoggedInGuard] },
  {path:'students',component:StudentsComponent ,canActivate:[IsAuthenticatedGuard,IsStudentGuard] ,children:[
    {path:'',component:DashboardComponent},
    {path:'**',component:PagenotfoundComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
