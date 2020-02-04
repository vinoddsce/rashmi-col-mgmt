import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css']
})
export class DeptContainerComponent {

  newStudent(data): void {
    console.log("Data: ", data);
  }
}
