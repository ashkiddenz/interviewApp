import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  id!: number;
  editMode = false;

  questionForm = new FormGroup({
    question: new FormControl(null, Validators.required),
    option1: new FormControl(null, Validators.required),
    option2: new FormControl(null, Validators.required),
    option3: new FormControl(null, Validators.required),
    option4: new FormControl(null, Validators.required),
    answer: new FormControl(null, Validators.required)
  })

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private router: Router) { }



  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      )
  }

  onSubmit() {
    const id = Math.floor(new Date().getTime() / 1000.0);
    const question = this.questionForm.get('question')?.value;
    const option1 = this.questionForm.get('option1')?.value;
    const option2 = this.questionForm.get('option2')?.value;
    const option3 = this.questionForm.get('option3')?.value;
    const option4 = this.questionForm.get('option4')?.value;
    const answer = this.questionForm.get('answer')?.value;

    const quest = new Question(id, question, option1, option2, option3, option4, answer);

    this.questionService.saveQuestion(quest);
    this.router.navigate(['questions']);

  }



  onCancel() {
    this.router.navigate(['questions']);
  }

}
