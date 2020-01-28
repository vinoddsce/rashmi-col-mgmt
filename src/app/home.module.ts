import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {

}
