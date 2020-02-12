import { Component, OnInit, Input } from '@angular/core';
import Student from 'src/app/model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  // @Input() _id: string;
  // @Input() name: string;
  // @Input() course: string;
  // @Input() fees: number;

  @Input() s: Student;

  getClass() {
    if (this.s.getFees() <= 50) {
      return true;
    } else {
      return false;
    }
  }

}
