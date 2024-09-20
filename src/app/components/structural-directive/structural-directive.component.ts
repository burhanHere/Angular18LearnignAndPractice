import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  isDiv1Visible: Boolean;
  isDiv2Visible: Boolean;
  div3TextBox1: String;
  div3TextBox2: String;
  isDiv4Active: Boolean;
  div4Text: String;
  cityArray: Array<String>;
  studentList: Array<Student>;

  constructor(private router:Router) {
    this.isDiv1Visible = true;
    this.isDiv2Visible = true;
    this.div3TextBox1 = ``;
    this.div3TextBox2 = ``;
    this.isDiv4Active = true;
    this.div4Text = `Div-4`;
    this.cityArray = ['Lahore', 'Punjab', 'Karachi', 'Fasilabad'];
    this.studentList = [
      new Student(1, 'AAA', 'Lahore', false),
      new Student(2, 'BBB', 'Karachi', false),
      new Student(3, 'CCC', 'Fasilabad', true),
      new Student(4, 'DDD', 'Burewala', false),
      new Student(5, 'EEE', 'Pindi', false),
      new Student(6, 'FFF', 'Islamabad', false),
    ];
  }

  public showDiv1() {
    this.isDiv1Visible = true;
  }

  public hideDiv1() {
    this.isDiv1Visible = false;
  }

  public toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  public nevigateToAttributeDirective() {
    this.router.navigateByUrl("attribute-directive");
  }
}

class Student {
  studentId: Number;
  name: String;
  city: String;
  isActive: Boolean;
  constructor(
    studentId: Number,
    name: String,
    city: String,
    isActive: Boolean
  ) {
    this.studentId = studentId;
    this.name = name;
    this.city = city;
    this.isActive = isActive;
  }
}
