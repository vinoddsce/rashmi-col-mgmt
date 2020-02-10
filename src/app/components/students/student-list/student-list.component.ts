import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  @Input() students: { name: string, course: string, fees: number }[] = [];

  isStudentAdded: boolean = true;

}
