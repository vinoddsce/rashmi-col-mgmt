import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<p>This is from Inline</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "NA";


  changeNameApp(event: string) {
    console.log("changeNameApp: ", event);
    this.title = event;
    // console.log("Clicked !!!", event);
    // this.title = "Col-Management";
  }

  // mouseOver(event) {
  //   console.log("Mouse Over !!!", event);
  // }
}
