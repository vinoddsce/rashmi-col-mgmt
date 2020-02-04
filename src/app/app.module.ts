import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentComponent } from './components/students/student/student.component';
import { AddFormComponent } from './components/department/add-form/add-form.component';
import { DeptContainerComponent } from './components/department/dept-container/dept-container.component';
import { StudentsContainerComponent } from './components/students/students-container/students-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    StudentListComponent,
    StudentComponent,
    AddFormComponent,
    DeptContainerComponent,
    StudentsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
