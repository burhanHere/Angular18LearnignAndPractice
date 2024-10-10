import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'Angular18TutorialsInHindi_LearningPartner';
  public nevbarData: NevbarItem[];
  constructor() {
    this.nevbarData = [
      {
        isDropDown: false,
        displayText: 'Data Binding',
        routerLink: 'data-binding',
      },
      {
        isDropDown: true,
        displayText: 'directives',
        routerLink: '',
        dropDownListElements: [
          {
            isDropDown: false,
            displayText: 'structural-directive',
            routerLink: 'structural-directive',
          },
          {
            isDropDown: false,
            displayText: 'attribute-directive',
            routerLink: 'attribute-directive',
          },
          {
            isDropDown: false,
            displayText: 'ng-template',
            routerLink: 'ng-template',
          },
          {
            isDropDown: false,
            displayText: 'ng-component',
            routerLink: 'ng-component',
          },
        ],
      },
      {
        isDropDown: true,
        displayText: 'control-flow',
        routerLink: '',
        dropDownListElements: [
          {
            isDropDown: false,
            displayText: 'if-else-control-flow',
            routerLink: 'if-else-control-flow',
          },
          {
            isDropDown: false,
            displayText: 'for-control-flow',
            routerLink: 'for-control-flow',
          },
        ],
      },
      { isDropDown: false, displayText: 'pipes', routerLink: 'pipes' },
      {
        isDropDown: true,
        displayText: 'forms',
        routerLink: '',
        dropDownListElements: [
          {
            isDropDown: false,
            displayText: 'template-form',
            routerLink: 'template-form',
          },
          {
            isDropDown: false,
            displayText: 'reactive-form',
            routerLink: 'reactive-form',
          },
        ],
      },
      {
        isDropDown: true,
        displayText: 'api-integration',
        routerLink: '',
        dropDownListElements: [
          {
            isDropDown: false,
            displayText: 'get-api',
            routerLink: 'get-api',
          },
          {
            isDropDown: false,
            displayText: 'post-put-delete-api',
            routerLink: 'post-put-delete-api',
          },
        ],
      },
      {
        isDropDown: false,
        displayText: 'lifecycle-events',
        routerLink: 'lifecycle-events',
      },
    ];
  }
}

interface NevbarItem {
  isDropDown: boolean;
  displayText: string;
  routerLink: string;
  dropDownListElements?: Array<NevbarItem>;
}
