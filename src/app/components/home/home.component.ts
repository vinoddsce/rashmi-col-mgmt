import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // @Input() projectName: string = '';
  @Input('pName') projectName: string = '';
  @Output() changeNameEvent = new EventEmitter<string>();


  changeName(event: MouseEvent) {
    console.log("Clicked !!!", event);
    this.changeNameEvent.emit('College Management');
  }

}
