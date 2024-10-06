import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() public alertName: string;
  @Input() public alertText: string;
  @Output() public alertOnClick: EventEmitter<boolean>;

  constructor() {
    this.alertName = 'danger';
    this.alertText = 'Please enter the text';
    this.alertOnClick = new EventEmitter();
  }
}
