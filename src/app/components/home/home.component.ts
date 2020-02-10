import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  students: { name: string, course: string, fees: number }[] = [];

  newStudent(data: { name: string, course: string, fees: number }): void {
    this.students.push(data);
    console.log("students: ", this.students);
  }
}
