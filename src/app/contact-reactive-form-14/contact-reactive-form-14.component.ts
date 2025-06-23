import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-reactive-form-14',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-reactive-form-14.component.html',
  styleUrl: './contact-reactive-form-14.component.scss',
})
export class ContactReactiveForm14Component {
  contactInfo: ContactInfo = { name: '', email: '', subject: '', message: '' };

  contactForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.contactForm = this.fb.group({
      name: new FormControl<string>(this.contactInfo.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl<string>(this.contactInfo.email, [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl<string>(this.contactInfo.subject, [
        Validators.required,
        Validators.minLength(2),
      ]),
      message: new FormControl<string>(this.contactInfo.message, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      console.log('Please check errors on form');
      return;
    }

    console.log(this.contactForm.value);
  }
}

export interface ContactInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}
