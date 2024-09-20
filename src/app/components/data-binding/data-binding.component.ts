import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // string, number, boolean, date
  courseName: string = `Anguler 18`;
  provinceName: string = 'Pakistan';
  inputType = `radio`;
  rollNo: number = 123;
  isPakistani: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = 'bg-primary';
  firstName = signal('Muhammad Burhan');

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }

  changeCourseName() {
    this.courseName = 'React JS';
    this.firstName.set("Burhan is a good boy");
  }
}
