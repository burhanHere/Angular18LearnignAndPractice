import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css',
})
export class NgcontainerComponent {
  public userData: any;
  private httpClient: HttpClient;
  constructor() {
    this.userData = null;
    this.httpClient = inject(HttpClient);
  }

  public getData(): void {
    this.userData = null;
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (result: any) => {
        this.userData = result;
      },
      () => {
        this.userData = ['Error Fetching Data'];
      }
    );
  }
}
