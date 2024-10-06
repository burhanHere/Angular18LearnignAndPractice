import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { log } from 'console';
import { OpenDirOptions } from 'fs';
import { AlertComponent } from '../../reuseableComponent/alert/alert.component';
import { PageHeaderComponent } from '../../reuseableComponent/page-header/page-header.component';

@Component({
  selector: 'app-lifecycle-events',
  standalone: true,
  imports: [AlertComponent,PageHeaderComponent],
  templateUrl: './lifecycle-events.component.html',
  styleUrl: './lifecycle-events.component.css',
})
export class LifecycleEventsComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  public text: string;
  constructor() {
    debugger;
    this.text = 'success';
    console.log('constructor()');
  }
  ngOnInit(): void {
    debugger;
    console.log('ngOnInit()');
  }
  ngDoCheck(): void {
    debugger;
    console.log('ngDoCheck()');
  }
  ngAfterViewInit(): void {
    debugger;
    console.log('ngAfterViewInit()');
  }
  ngAfterViewChecked(): void {
    debugger;
    console.log('ngAfterViewChecked()');
  }
  ngAfterContentInit(): void {
    debugger;
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked(): void {
    debugger;
    console.log('ngAfterContentChecked()');
  }
  ngOnDestroy(): void {
    debugger;
    console.log('ngOnDestroy()');
  }
}
