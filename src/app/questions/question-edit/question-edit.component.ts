import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarItemComponent } from 'src/app/components/snackbar-item/snackbar-item.component';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  index!: number;
  editMode = false;
  editId:number = 0;

  questionForm:FormGroup = new FormGroup({}) ;

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private router: Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'] -1;
          this.editMode = params['id'] != null;
          console.log("EDIT MODE",this.editMode,"ID",this.index);
          this.initForm();
        }
      )
  }

  onSubmit() {
    if(this.editMode){
        const question = {id:this.editId,...this.questionForm.value};
        this.questionService.updateQuestion(this.index,question);
        this.router.navigate(['questions']);
        this.openSnackBar('Question '+(this.index+1)+' edited successfully')
    }else {
      this.editId = Math.floor(new Date().getTime() / 1000.0);
      console.log('Form Object',this.questionForm.value)
       const quest:Question = {id:this.editId,...this.questionForm.value}
       this.questionService.saveQuestion(quest);
       this.router.navigate(['questions']);
       this.openSnackBar('New question added successfully');
    }

  }


  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route});
  }


  initForm(){
    let question = '';
     let option1 = '';
     let option2 = '';
     let option3 = '';
     let option4 = '';
      let answer = '';



      if(this.editMode){
        const quest = this.questionService.getQuestion(this.index);
        if(quest){
          this.editId = quest.id;
          question = quest.question;
           option1 = quest.option1;
           option2 = quest.option2;
           option3 = quest.option3;
           option4 = quest.option4;
            answer = quest.answer;
        } else {
          this.router.navigate(['questions']);
          this.openSnackBar('Question '+(this.index+1)+' does not exist');
        }
         console.log("Question with ID",this.editId," is being edited")
      }

      this.questionForm = new FormGroup({
           question:new FormControl(question,Validators.required),
           option1:new FormControl(option1,Validators.required),
           option2:new FormControl(option2,Validators.required),
           option3:new FormControl(option3,Validators.required),
           option4:new FormControl(option4,Validators.required),
           answer:new FormControl(answer,Validators.required),
      })

  }

  openSnackBar(message:string) {
    this.snackbar.openFromComponent(SnackbarItemComponent,{
      data:message,
      duration:1000
    })
  }

}
