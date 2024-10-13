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
  imports: [AlertComponent, PageHeaderComponent],
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
    this.text = 'success';
    console.log('constructor()');
  }
  ngOnInit(): void {
    console.log('ngOnInit()');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }
}
