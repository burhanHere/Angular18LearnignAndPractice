import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertComponent } from '../../reuseableComponent/alert/alert.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, AlertComponent, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public signUpFormData: any;
  public showAlert: boolean;
  private router: Router;
  @ViewChild(AlertComponent)
  private signupAlert!: AlertComponent;
  private httpClient: HttpClient;

  constructor() {
    this.signUpFormData = {
      userId: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNo: '',
      emailId: '',
      altMobileNo: '',
      password: '',
      userAddress: {
        city: '',
        state: '',
        pincode: '',
        addressLine: '',
      },
      userSocialDetails: {
        facebookProfileUrl: '',
        linkdinProfileUrl: '',
        instagramHandle: '',
        twitterHandle: '',
      },
    };
    this.router = inject(Router);
    this.showAlert = false;
    this.httpClient = inject(HttpClient);
  }

  public signUpUser(): void {
    this.signUpFormData['middleName'] = 'N/A';
    console.log(this.signUpFormData);
    this.httpClient
      .post(
        'https://freeapi.gerasim.in/api/JWT/CreateNewUser',
        this.signUpFormData
      )
      .subscribe(
        (responce: any) => {
          console.log(responce);
          if (responce.result) {
            this.showAlert = true;
            this.signupAlert.alertName = 'success';
            this.signupAlert.alertText = `Sign Up successful.`;
            setTimeout(() => {}, 3000);
            this.router.navigateByUrl('login');
          } else {
            this.showAlert = true;
            this.signupAlert.alertName = 'danger';
            this.signupAlert.alertText = `Sign Up failed. ${responce.message}`;
          }
        },
        (err: any) => {
          console.log(err);
          this.showAlert = true;
          this.signupAlert.alertName = 'danger';
          this.signupAlert.alertText = 'Sign Up failed.';
        }
      );
    this.signUpFormData = {
      userId: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNo: '',
      emailId: '',
      altMobileNo: '',
      password: '',
      userAddress: {
        city: '',
        state: '',
        pincode: '',
        addressLine: '',
      },
      userSocialDetails: {
        facebookProfileUrl: '',
        linkdinProfileUrl: '',
        instagramHandle: '',
        twitterHandle: '',
      },
    };
  }
}
