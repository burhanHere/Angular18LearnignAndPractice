import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { PageHeaderComponent } from '../../reuseableComponent/page-header/page-header.component';
import { json } from 'stream/consumers';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [PageHeaderComponent,JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  public firstName: WritableSignal<string>;
  public lastName: WritableSignal<string>;
  public fullName: Signal<string>;
  public rollNo: WritableSignal<number>;
  public courseName: string;
  public cityList: WritableSignal<Array<string>>;
  public studentObj: WritableSignal<Object>;
  public signalInSignal: WritableSignal<Object>;
  constructor() {
    this.firstName = signal('Burhan');
    this.rollNo = signal(123);
    this.courseName = 'Java';
    this.lastName = signal('lastName');
    this.fullName = computed(() => this.firstName() + ' ' + this.lastName());
    this.cityList = signal(['Lahore', 'Karachi']);
    this.studentObj = signal({
      name: 'Burhan',
      city: 'Lahore',
    });
    this.signalInSignal = signal({
      prop1:'valueProp1',
      prop2Signal: signal('signalValueProp2')
    });
    setTimeout(() => {
      this.courseName = 'Burhan';
    }, 6000);
  }
  public ChangeFirstName(): void {
    this.firstName.set('Areeba');
  }

  public ChangeLastName(): void {
    this.lastName.set('Khan');
  }
  public AddCity(): void {
    this.cityList.set([...this.cityList(), 'Pishawar']);
  }

  public AddPropInStudentObj() {
    this.studentObj.set({ ...this.studentObj(), age: 22 });
  }
  public updatePropInStudentObj() {
    this.studentObj.set({ ...this.studentObj(), city: 'Karachi' });
  }
}
