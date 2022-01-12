import { Question } from './../../models/question.model';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
}

