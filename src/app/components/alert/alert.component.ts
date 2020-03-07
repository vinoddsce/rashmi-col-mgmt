import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() type: string = "Sucess";

  alert(): void {
    window.alert("Hi");
  }

}
