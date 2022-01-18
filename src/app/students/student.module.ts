import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    RegisterComponent,
    StudentsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule

  ]
})
export class StudentModule { }
