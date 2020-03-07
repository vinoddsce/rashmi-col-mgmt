import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';


interface Item {
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<p>This is from Inline</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  @ViewChildren(AlertComponent)
  alerts: QueryList<AlertComponent>;

  showMsg: boolean = true;

  items: { id: number, name: string }[] =
    [{ id: 0, name: 'Item-1' }, { id: 2, name: 'Item-2' }, { id: 3, name: 'Item-3' }];



  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => {
      alertInstance.type = "Modified";
      console.log(alertInstance);
    });
  }
}
