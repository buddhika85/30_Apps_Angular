import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accordion-animation-8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accordion-animation-8.component.html',
  styleUrl: './accordion-animation-8.component.scss',
})
export class AccordionAnimation8Component {
  faqs: Faq[] = [
    new Faq(
      'What is Angular?',
      'Angular is a platform for building mobile and desktop web applications.'
    ),
    new Faq(
      'What is a component in Angular?',
      'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.'
    ),
    new Faq(
      'What are Angular directives?',
      'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.'
    ),
  ];

  selectedFaq: Faq | null = null;

  openFaq(faq: Faq): void {
    if (faq === this.selectedFaq) {
      this.selectedFaq = null;
      return;
    }
    this.selectedFaq = faq;
  }
}

export class Faq {
  question!: string;
  answer!: string;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}
