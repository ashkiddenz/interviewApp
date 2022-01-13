import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarItemComponent } from './../snackbar-item/snackbar-item.component';
import { QuestionService } from './../../services/question.service';
import { Question } from './../../models/question.model';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*', minHeight: "*"})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls:['./question-item.component.css']
})

export class QuestionItemComponent {
  @Input() question!: Question;
  @Input() index!: number;
  panelOpenState = false;

  constructor(private questionService:QuestionService,private snackbar:MatSnackBar,private router:Router,private route:ActivatedRoute){
  }

  openSnackBar() {
    this.snackbar.openFromComponent(SnackbarItemComponent,{
      data:'Question '+(this.index+1)+' deleted successfully !!!',
      duration:2000
    })
  }

  onDeleteQuestion(){
    console.log(this.question.id);
     this.questionService.deleteQuestion(this.question.id);
     this.openSnackBar();
  }

  onEditQuestion(){
      this.router.navigate([this.index+1,'edit'],{relativeTo:this.route})
  }

}

