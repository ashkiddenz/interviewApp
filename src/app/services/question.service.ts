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
      const questions = JSON.parse(jsonData);
      this.questions = questions;
    } else {
      this.questions=[];
    }
    return this.questions;
  }

  getQuestion(index:number){
    this.questions=this.getQuestions();
    return this.questions[index];
  }

  updateQuestion(index:number,question:Question){
      let questions = this.getQuestions();
      questions[index]=question;
      console.log(questions);
      this.questions= questions;
      this.saveQuestions(this.questions);
      this.questionsChanged.next(this.questions)
  }


  saveQuestion(question: Question) {
    const questionsArray = this.getQuestions();
    questionsArray.push(question);
    localStorage.setItem('questions', JSON.stringify(questionsArray));
    this.questions = questionsArray;
    this.questionsChanged.next(this.questions);
  }

  saveQuestions(questions:Question[]){
      localStorage.setItem('questions',JSON.stringify(questions));
      this.questionsChanged.next(questions);
  }

  deleteQuestion(questionId:number){
    const questionsArray:Question[]= this.getQuestions();
    questionsArray.forEach((question,i)=>{
         if(question.id===questionId){
           questionsArray.splice(i,1);
         }
         this.saveQuestions(questionsArray);
    })


    this.questionsChanged.next(this.questions);
  }

}
