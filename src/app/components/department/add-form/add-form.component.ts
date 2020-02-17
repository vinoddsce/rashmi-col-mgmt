import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  // name: string = '';
  // course: string = '';
  fees: number = 0;


  @ViewChild('courseName', { static: false }) courseNameRef: ElementRef;

  @Output() newStudentEvent = new EventEmitter<{ name: string, course: string, fees: number }>();

  addStudent(element: HTMLInputElement): void {
    console.log("Element: ", element.value);
    console.log("Element: ", this.courseNameRef.nativeElement.value);
    this.newStudentEvent.emit({ name: element.value, course: this.courseNameRef.nativeElement.value, fees: this.fees });
  }

}
