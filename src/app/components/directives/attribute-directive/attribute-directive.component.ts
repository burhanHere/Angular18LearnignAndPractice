import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../reuseableComponent/page-header/page-header.component';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,PageHeaderComponent],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  public isDiv1BackgroundColorChange: Boolean;
  public isDiv2BackgroundColorChange: Boolean;
  public div3TextBox1: string;
  public div3TextBox2: string;
  public isDiv4ActiveDanger: Boolean;
  public div4Text: string;
  public cityArray: Array<string>;
  public studentList: Array<Student>;

  constructor() {
    this.isDiv1BackgroundColorChange = true;
    this.isDiv2BackgroundColorChange = true;
    this.div3TextBox1 = ``;
    this.div3TextBox2 = ``;
    this.isDiv4ActiveDanger = true;
    this.div4Text = `Div-4`;
    this.cityArray = ['Lahore', 'Punjab', 'Karachi', 'Fasilabad'];
    this.studentList = [
      new Student(1, 'AAA', 'Lahore', false, 90),
      new Student(2, 'BBB', 'Karachi', false, 99),
      new Student(3, 'CCC', 'Fasilabad', true, 50),
      new Student(4, 'DDD', 'Burewala', false, 75),
      new Student(5, 'EEE', 'Pindi', false, 25),
      new Student(6, 'FFF', 'Islamabad', false, 48),
    ];
  }

  public bgDangerDiv1():void {
    this.isDiv1BackgroundColorChange = true;
  }

  public bgPrimaryDiv1():void {
    this.isDiv1BackgroundColorChange = false;
  }

  public toggleDiv2bgColor():void {
    this.isDiv2BackgroundColorChange = !this.isDiv2BackgroundColorChange;
  }
}

class Student {
  public studentId: Number;
  public name: string;
  public city: string;
  public isActive: Boolean;
  public totalProcess: Number;
  constructor(
    studentId: Number,
    name: string,
    city: string,
    isActive: Boolean,
    totalProcess: Number
  ) {
    this.studentId = studentId;
    this.name = name;
    this.city = city;
    this.isActive = isActive;
    this.totalProcess = totalProcess;
  }
}
