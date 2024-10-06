import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from "../../../reuseableComponent/page-header/page-header.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [TitleCasePipe, PageHeaderComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  //http= inject(HttpClient)//using inject
  userList: any[];

  // thid is dependency injection for HttpClient
  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  getAllUsers() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      }, () => {
        this.userList = ['Error Fetching Data'];
      });
  }
}
