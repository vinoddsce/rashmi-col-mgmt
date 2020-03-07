import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerLogo: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log("TemplateRef: ", this.headerLogo);
  }

}
