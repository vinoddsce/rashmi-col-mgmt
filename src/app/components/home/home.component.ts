import { Component, Input, EventEmitter, Output } from '@angular/core';
import Student from 'src/app/model/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  students: Student[] = [];
  num: number = 0;

  showDepartment: boolean = true;

  onShowDeptClicked(event: MouseEvent) {
    this.showDepartment = true;
  }

  onShowStudentListClicked(event: MouseEvent) {
    this.showDepartment = false;
  }

  newStudent(data: { name: string, course: string, fees: number }): void {
    let s = new Student(this.students.length + 1 + "", data.name, data.course, data.fees);
    this.students.push(s);
    console.log("students: ", this.students);
  }
}
