import { QuestionsResolver } from './resolvers/questions.resolver';
import { LoggedInGuard } from './guards/logged-in.guard';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionEditComponent } from './questions/question-edit/question-edit.component';
import { LoginComponent } from './login/login.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate:[LoggedInGuard] },
  {
    path: 'questions', component: QuestionsComponent, canActivate: [IsAuthenticatedGuard], children: [
      { path: '', component: QuestionListComponent , resolve:{questions:QuestionsResolver} },
      { path: 'new', component: QuestionEditComponent },
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
  providers: []
})
export class AppRoutingModule { }
