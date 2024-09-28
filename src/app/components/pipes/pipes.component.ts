import {
  CurrencyPipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { BootstrapOptions, Component } from '@angular/core';
import { NaPipe } from '../../Pipes/na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    PercentPipe,
    SlicePipe,
    KeyValuePipe,
    JsonPipe,
    CurrencyPipe,
    NaPipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  public firstName: string;
  public percentPipe: number;
  public testObject: object;
  public testClass: test;
  public testNumber: number;
  public testString: string;
  constructor() {
    this.firstName = 'this is a demo session';
    this.percentPipe = 0.15;
    this.testObject = {
      name: 'Burhan',
      age: '22',
      semester: '7',
      cgpa: '3.58',
    };
    this.testClass = new test(15, 'Buhran');
    this.testNumber = 123234;
    this.testString = '';
  }
  public toggelTestString(): void {
    if (this.testString !== '') {
      this.testString = '';
    } else {
      this.testString = 'temp string';
    }
  }
}

class test {
  public id: number;
  public name: string;
  public home: string;
  public haveCar: boolean;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.home = '723-B';
    this.haveCar = true;
  }
}
