import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	goals = [];
	goalCount: number;
	goalText: string = 'Sample Goal!';

  constructor() { }

  ngOnInit() {
  	this.goalCount = this.goals.length;
  }

  addGoal(){
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.goalCount = this.goals.length;
  }

  removeGoal(i){
    this.goals.splice(i, 1);
    this.goalCount = this.goals.length;
  }

}
