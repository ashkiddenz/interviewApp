
import { QuestionListComponent } from './questions/question-list/question-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionStartComponent } from './questions/question-start/question-start.component';
import { QuestionEditComponent } from './questions/question-edit/question-edit.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { LoginComponent } from './login/login.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'questions', component: QuestionsComponent, canActivate: [IsAuthenticatedGuard], children: [
      { path: '', component: QuestionListComponent },
      { path: 'new', component: QuestionEditComponent },
      { path: ':id', component: QuestionDetailComponent },
      { path: ':id/edit', component: QuestionEditComponent },
      { path: '**', redirectTo: '/questions', pathMatch: 'full' },
    ]
  },
  {path:'',redirectTo:'/questions',pathMatch:'full'},
  { path: '**', redirectTo:'/questions',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsAuthenticatedGuard]
})
export class AppRoutingModule { }
