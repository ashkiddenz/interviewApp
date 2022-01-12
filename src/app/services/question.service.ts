import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionsChanged = new Subject<Question[]>();

  private questions: Question[] = [];

  constructor() { }

  getQuestions () {
    const jsonData = localStorage.getItem('questions');
    if (jsonData) {
      const question = JSON.parse(jsonData);
      this.questions = question;
    } else {
      this.questions = [];
    }
    return this.questions;
  }

  saveQuestion(question: Question) {
    const questionsArray = this.getQuestions();
    questionsArray.push(question);
    localStorage.setItem('questions', JSON.stringify(questionsArray));
    this.questions = questionsArray;
    this.questionsChanged.next(this.questions);
  }

}
