import { QuestionService } from './../services/question.service';
import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsResolver implements Resolve<Question[]> {

  constructor(private questionService:QuestionService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
      return this.questionService.getQuestions();
  }
}
