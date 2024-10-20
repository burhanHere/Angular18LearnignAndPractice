import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertComponent } from '../../reuseableComponent/alert/alert.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public logInCredentials: any;
  public showAlert: boolean;
  private router: Router;
  @ViewChild(AlertComponent)
  private loginAlert!: AlertComponent;
  private httpClient: HttpClient;

  constructor() {
    this.logInCredentials = {
      EmailId: '',
      Password: '',
    };
    this.router = inject(Router);
    this.showAlert = false;
    this.httpClient = inject(HttpClient);
  }

  public logInUser(): void {
    // if (
    //   this.logInCredentials['userName'] !== '' &&
    //   this.logInCredentials['password'] !== ''
    // ) {
    //   if (
    //     this.logInCredentials['userName'] === '_burhan.here_' &&
    //     this.logInCredentials['password'] === 'Burhan123@'
    //   ) {
    //     sessionStorage.setItem(
    //       `logedInUser_userName-${this.logInCredentials['userName']}`,
    //       this.logInCredentials['userName']
    //     );
    //     this.showAlert = true;
    //     this.loginAlert!.alertName = 'successs';
    //     this.loginAlert!.alertText = 'LogIn Successful.';
    //     this.router.navigateByUrl('layout');
    //   } else {
    //     this.showAlert = true;
    //     this.loginAlert!.alertName = 'danger';
    //     this.loginAlert!.alertText = 'Invalid User Credentials.';
    //   }
    // }

    if (
      this.logInCredentials['userName'] !== '' &&
      this.logInCredentials['password'] !== ''
    ) {
      this.httpClient
        .post('https://freeapi.gerasim.in/api/JWT/login', this.logInCredentials)
        .subscribe(
          (responce: any) => {
            console.log(responce);
            if (responce.result) {
              console.log(responce.message);
              localStorage.setItem('loginUserData', JSON.stringify(responce.data));
              this.router.navigateByUrl('layout');
            } else {
              this.showAlert = true;
              this.loginAlert.alertName = 'warning';
              this.loginAlert.alertText = `Login failed.${responce.message}`;
            }
          },
          (err: any) => {
            console.log(err);
            this.showAlert = true;
            this.loginAlert.alertName = 'warning';
            this.loginAlert.alertText = 'Login failed. Try again.';
          }
        );
    } else {
      this.showAlert = true;
      this.loginAlert.alertName = 'warning';
      this.loginAlert.alertText = 'Please fill the login Credentials.';
    }
  }
}
