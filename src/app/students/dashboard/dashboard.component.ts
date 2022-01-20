import { QuizService } from './../../services/quiz.service';
import { QuestionService } from './../../services/question.service';
import { Question } from 'src/app/models/question.model';
import { Component, OnInit, OnChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  username: string = '';
  questions: Question[] = null;
  currentQuestionIndex: number = 0;
  points: number = 0
  counter: number = 30;
  quizQuestions: Question[] = null;
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  totalAnswered: number = 0;
  interval$: any;
  progress:string = "0" ;
  isCorrect:boolean;
  quizOver:boolean = false;

  constructor(private questionService: QuestionService,private quizService:QuizService) { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('username'));
    this.questions = JSON.parse(localStorage.getItem('questions'));
    this.quizQuestions = this.getRandom(this.questions, 10);
    console.log('Quiz Questions', this.quizQuestions);
    this.startCounter();
  }

  ngOnChanges() {
    console.log('Changed');
  }

  answer(index: number, selectedOption: string) {
      if (this.currentQuestionIndex < this.quizQuestions.length) {
        if (this.quizQuestions[index].answer === selectedOption) {
          this.quizService.notifyBgDirective(true);
          this.isCorrect=true;
          console.log('Matches')
          this.points += 10;
          this.correctAnswers++;
        } else {
          console.log('no match')
          this.quizService.notifyBgDirective(false);
          this.isCorrect=false;
          this.wrongAnswers++;
        }

        console.log('In Component-isCorrect = ',this.isCorrect);

        if(this.currentQuestionIndex<this.quizQuestions.length-1){
            this.currentQuestionIndex++;
            this.counter=30;
        } else{
          console.log('Quiz over') ;
          this.quizOver = true;
          this.stopCounter();
        }
      }

      this.totalAnswered++;
      console.log('Current Question Index', this.currentQuestionIndex);
      console.log('CorrectAnswers=', this.correctAnswers);
      console.log('WrongAnswers=', this.wrongAnswers);
      console.log('Total Answered = ', this.totalAnswered);
      this.progress=((this.totalAnswered)*10).toString();

  }

  getRandom = (arr: Question[], n: number) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  previousQuestion() {
    this.currentQuestionIndex--;
  }

  nextQuestion() {
      this.totalAnswered++;
      this.wrongAnswers++;
      this.progress=((this.totalAnswered)*10).toString();
      console.log('Current Question Index', this.currentQuestionIndex);
      console.log('CorrectAnswers=', this.correctAnswers);
      console.log('WrongAnswers=', this.wrongAnswers);
      console.log('Total Answered = ', this.totalAnswered);
      if (this.currentQuestionIndex < this.quizQuestions.length-1) {
          this.currentQuestionIndex++;
          this.counter=30;
      } else {
        this.quizOver = true;
        this.stopCounter();
      }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(
      value => {
        this.counter--;
        if (this.counter === 0 ) {
          console.log("Times up");
          this.nextQuestion();
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
      this.quizOver=true;
    }, 300* 1000);
  }


  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }


}


