import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  quizStarted:boolean = false;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  startQuiz(){
    this.quizStarted=true;
    this.router.navigate(['quiz'],{relativeTo:this.route});
  }

}
