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
  public courseName: string = `Anguler 18`;
  public provinceName: string = 'Pakistan';
  public inputType = `radio`;
  public rollNo: number = 123;
  public isPakistani: boolean = true;
  public currentDate: Date = new Date();
  public myClassName: string = 'bg-primary';
  public firstName = signal('Muhammad Burhan');

  constructor() {}

  public showAlert(message: string) {
    alert(message);
  }

  public changeCourseName() {
    this.courseName = 'React JS';
    this.firstName.set('Burhan is a good boy');
  }
}
