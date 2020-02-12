import { Component, Input } from '@angular/core';
import Student from 'src/app/model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  @Input() students: Student[] = [];

  isStudentAdded: boolean = true;


}
