import { Subscription } from 'rxjs';
import { QuestionService } from './../../services/question.service';
import { Component, OnInit ,OnDestroy, Renderer2, ViewChild, ElementRef, ApplicationModule } from '@angular/core';
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

  @ViewChild('appItem',{static:false}) appItem:any;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService,private renderer:Renderer2,private elRef:ElementRef) {

    this.renderer.listen('window', 'click',(e:Event)=>{
           if(e.target===this.appItem.nativeElement){

           }
      })
  }


  ngOnInit() {
    this.questionSub = this.questionService.questionsChanged.subscribe(
      questions => {
        console.log('Questions Changed')
        if (questions) {
          this.questions = questions;
        }
      })
    // this.questions = this.questionService.getQuestions();   without resolver

    this.questions = this.route.snapshot.data['questions'];
  }

  addMcq() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.questionSub.unsubscribe();
  }

}
