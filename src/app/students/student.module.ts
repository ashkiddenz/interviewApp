import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { StudentRoutingModule } from './student-routing.module';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { ChangeBgDirective } from '../change-bg.directive';

@NgModule({
  declarations: [
    RegisterComponent,
    StudentsComponent,
    DashboardComponent,
    ChangeBgDirective
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatIconModule,
  ]
})
export class StudentModule { }
