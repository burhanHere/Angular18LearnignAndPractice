import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PageHeaderComponent } from "../../../reuseableComponent/page-header/page-header.component";

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css',
})
export class NgtemplateComponent {
  public isUserloggedIn: boolean;
  public loggedInUserName: string;
  @ViewChild('dynemicTemplate') dynemicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynemicContainer', { read: ViewContainerRef }) dynemicContainer:
    | ViewContainerRef
    | undefined;

  constructor() {
    this.isUserloggedIn = false;
    this.loggedInUserName = 'Burhan';
  }

  public loadTemplate(): void {
    if (this.dynemicTemplate) {
      this.dynemicContainer?.createEmbeddedView(this.dynemicTemplate);
    }
  }
}
