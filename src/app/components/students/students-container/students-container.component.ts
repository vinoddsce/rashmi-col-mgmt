import { Component, Input } from '@angular/core';
import Student from 'src/app/model/student';

@Component({
  selector: 'app-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.css']
})
export class StudentsContainerComponent {

  @Input() students: Student[] = [];


}
