import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderComponent } from '../../../reuseableComponent/page-header/page-header.component';
import { AlertComponent } from '../../../reuseableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [PageHeaderComponent, AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  @ViewChild('nameTextBox')
  private nameTextBox!: ElementRef<any>;

  @ViewChild('nameTextBox2')
  private nameTextBox2!: ElementRef<any>;

  @ViewChild(AlertComponent)
  private alertBox?: AlertComponent;

  @ViewChild('test')
  private alertBox2?: AlertComponent;

  public doSomeThing(): void {
    this.nameTextBox.nativeElement.value =
      this.nameTextBox2.nativeElement.value;
    this.nameTextBox.nativeElement.style.background = '#0d6efd';
    this.nameTextBox2.nativeElement.style.background = '#0dffff';
    this.alertBox!.alertName = 'success';
    this.alertBox2!.alertText = 'teting testing';
  }
}
