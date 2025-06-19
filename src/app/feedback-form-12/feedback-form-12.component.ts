import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form-12',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback-form-12.component.html',
  styleUrl: './feedback-form-12.component.scss',
})
export class FeedbackForm12Component {
  feedback: Feedback = { name: '', email: '', description: '' };

  onSubmit() {
    console.log(this.feedback);
  }
}

export interface Feedback {
  name: string;
  email: string;
  description: string;
}
