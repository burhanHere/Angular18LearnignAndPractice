import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public title = 'Angular18TutorialsInHindi_LearningPartner';
  public nevbarData: NevbarItem[];
  private router: Router;
  public logedInUserData: any;

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
      {
        isDropDown: true,
        displayText: 'decorators',
        routerLink: '',
        dropDownListElements: [
          {
            isDropDown: false,
            displayText: 'viewChild',
            routerLink: 'viewChild',
          },
        ],
      },
    ];
    this.router = inject(Router);
    debugger;
    this.logedInUserData = localStorage.getItem('loginUserData');
    this.logedInUserData = this.logedInUserData ? JSON.parse(this.logedInUserData) : null;
  }

  public logoutUser(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
}

interface NevbarItem {
  isDropDown: boolean;
  displayText: string;
  routerLink: string;
  dropDownListElements?: Array<NevbarItem>;
}
