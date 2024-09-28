import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-control-flow.component.html',
  styleUrls: ['./for-control-flow.component.css'],
})
export class ForControlFlowComponent {
  public isDiv1Visible: Boolean;
  public isDiv2Visible: Boolean;
  public div3TextBox1: string;
  public div3TextBox2: string;
  public isDiv4Active: Boolean;
  public div4Text: string;
  public cityArray: Array<string>;
  public studentList: Array<Student>;

  constructor() {
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
}

class Student {
  public studentId: Number;
  public name: string;
  public city: string;
  public isActive: Boolean;
  constructor(
    studentId: Number,
    name: string,
    city: string,
    isActive: Boolean
  ) {
    this.studentId = studentId;
    this.name = name;
    this.city = city;
    this.isActive = isActive;
  }
}
