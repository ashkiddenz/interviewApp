import { Component } from '@angular/core';
import { slideInAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent  {
  title = 'interviewApp';
  loggedEvent:boolean=false;

  constructor(){}

}
