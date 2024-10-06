import { JsonPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  @ViewChild('outputDiv') outputDiv!: ElementRef;
  stundetForm: FormGroup;
  constructor() {
    this.stundetForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      city: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      isAcceptTerms: new FormControl('', [Validators.required]),
    });
  }

  resetForm() {
    this.stundetForm.reset();
    this.outputDiv.nativeElement.style.setProperty('display', 'none');
  }
  submitForm() {
    this.outputDiv.nativeElement.style.display = 'block';
  }
}
