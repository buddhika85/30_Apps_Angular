import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCard1Component } from './photo-card-1/photo-card-1.component';
import { Counter2Component } from './counter-2/counter-2.component';
import { ToDoList3Component } from './to-do-list-3/to-do-list-3.component';
import { StopWatch3Component } from './stop-watch-3/stop-watch-3.component';
import { GuessNumber4Component } from './guess-number-4/guess-number-4.component';
import { TicTacToe5Component } from './tic-tac-toe-5/tic-tac-toe-5.component';
import { DynamicListFilterComponent } from './dynamic-list-filter/dynamic-list-filter.component';
import { RockPaperScissors7Component } from './rock-paper-scissors-7/rock-paper-scissors-7.component';
import { AccordionAnimation8Component } from './accordion-animation-8/accordion-animation-8.component';
import { RandomJokeGen10Component } from './random-joke-gen-10/random-joke-gen-10.component';
import { FeedbackForm12Component } from './feedback-form-12/feedback-form-12.component';
import { ContactForm13Component } from './contact-form-13/contact-form-13.component';
import { ContactReactiveForm14Component } from './contact-reactive-form-14/contact-reactive-form-14.component';
import { CustomDirectives15Component } from './custom-directives-15/custom-directives-15.component';
import { AngularCalculator16Component } from './angular-calculator-16/angular-calculator-16.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularCalculator16Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '30 Apps Angular';
}
