import { QuizService } from './services/quiz.service';
import { Subscription } from 'rxjs';
import { Directive, Input, ElementRef, Renderer2, HostListener ,OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective implements OnInit {

  isCorrect : Boolean;
  @Input() quizOver  : Boolean = false;

  isCorrectChangeSub:Subscription;

  constructor(private el:ElementRef,private renderer:Renderer2,private quizService:QuizService) { }

  ngOnInit() {
    this.isCorrectChangeSub=this.quizService.isCorrectChanged.subscribe(value=>{
      this.isCorrect = value;
    })
  }

  @HostListener('click') answer() {
     console.log('In Directive-isCorrect = ',this.isCorrect);
    if(this.isCorrect && !this.quizOver){
      this.renderer.setStyle(this.el.nativeElement,'background','green');
      this.renderer.setStyle(this.el.nativeElement,'color','#fff');
    } else if(!this.isCorrect && !this.quizOver) {
      this.renderer.setStyle(this.el.nativeElement,'background','red');
      this.renderer.setStyle(this.el.nativeElement,'color','#fff');
    }

    setTimeout(()=>{
      this.renderer.removeStyle(this.el.nativeElement,'background');
      this.renderer.removeStyle(this.el.nativeElement,'color');
    },100);
  }
}
