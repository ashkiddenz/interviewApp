import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

   isCorrectChanged = new Subject<boolean>()

   notifyBgDirective(isCorrect:boolean){
       this.isCorrectChanged.next(isCorrect);
   }

}
