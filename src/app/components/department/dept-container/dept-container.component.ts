import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css']
})
export class DeptContainerComponent {

  @Output() newStudentEvent = new EventEmitter<{ name: string, course: string, fees: number }>();

  newStudent(data: { name: string, course: string, fees: number }): void {
    this.newStudentEvent.emit({ name: data.name, course: data.course, fees: data.fees });
  }
}
