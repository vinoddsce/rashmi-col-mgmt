import { Component } from '@angular/core';


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
export class AppComponent {
  showMsg: boolean = true;
  items: { id: number, name: string }[] = [{ id: 1, name: 'Item-1' }, { id: 2, name: 'Item-2' }, { id: 3, name: 'Item-3' }];

}
