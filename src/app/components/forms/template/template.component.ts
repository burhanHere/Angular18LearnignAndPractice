import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../reuseableComponent/page-header/page-header.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe,PageHeaderComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    province: '',
    zipCode: '',
    isAcceptTerms: false,
  };
}
