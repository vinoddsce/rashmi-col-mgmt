import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  name: string = '';
  course: string = '';
  fees: number = 0;

  @Output() newStudentEvent = new EventEmitter<{ name: string, course: string, fees: number }>();

  addStudent(event: MouseEvent): void {
    this.newStudentEvent.emit({ name: this.name, course: this.course, fees: this.fees });
  }

}
