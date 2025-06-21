import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form-13',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form-13.component.html',
  styleUrl: './contact-form-13.component.scss',
})
export class ContactForm13Component {
  contactInfo: Contact = { name: '', email: '', subject: '', message: '' };

  onSubmit(): void {
    console.log(this.contactInfo);
  }
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}
