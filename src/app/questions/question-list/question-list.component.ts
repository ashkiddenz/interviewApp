import { Subscription } from 'rxjs';
import { QuestionService } from './../../services/question.service';
import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit,OnDestroy {

  questions: Question[] = []
  questionSub = new Subscription;


  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) {

   }


  ngOnInit() {
    this.questionSub = this.questionService.questionsChanged.subscribe(
      questions => {
        if (questions) {
          this.questions = questions;
        }
      })
    this.questions = this.questionService.getQuestions();
  }

  addMcq() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.questionSub.unsubscribe();
  }

}
