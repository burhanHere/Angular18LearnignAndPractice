import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertComponent } from '../../reuseableComponent/alert/alert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public logInCredentials: any;
  public showAlert: boolean;
  private router: Router;
  @ViewChild(AlertComponent)
  private loginAlert!: AlertComponent;

  constructor() {
    this.logInCredentials = {
      userName: '',
      password: '',
    };
    this.router = inject(Router);
    this.showAlert = false;
  }

  public logInUser(): void {
    if (
      this.logInCredentials['userName'] !== '' &&
      this.logInCredentials['password'] !== ''
    ) {
      if (
        this.logInCredentials['userName'] === '_burhan.here_' &&
        this.logInCredentials['password'] === 'Burhan123@'
      ) {
        sessionStorage.setItem(
          `logedInUser_userName-${this.logInCredentials['userName']}`,
          this.logInCredentials['userName']
        );
        sessionStorage.setItem(
          `logedInUser_password-${this.logInCredentials['userName']}`,
          this.logInCredentials['password']
        );
        this.showAlert = true;
        this.loginAlert!.alertName = 'successs';
        this.loginAlert!.alertText = 'LogIn Successful.';
        this.router.navigateByUrl('layout');
      } else {
        debugger;
        this.showAlert = true;
        this.loginAlert!.alertName = 'danger';
        this.loginAlert!.alertText = 'Invalid User Credentials.';
      }
    }
  }
}
