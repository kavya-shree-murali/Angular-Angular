import { Component, OnInit } from '@angular/core';
import { CheckNull } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project-workouts';


  constructor() { }

  ngOnInit(): void {
    
  }
}


