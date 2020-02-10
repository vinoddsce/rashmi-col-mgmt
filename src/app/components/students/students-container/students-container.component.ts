import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.css']
})
export class StudentsContainerComponent {

  @Input() students: { name: string, course: string, fees: number }[] = [];


}
