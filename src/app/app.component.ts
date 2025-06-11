import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCard1Component } from './photo-card-1/photo-card-1.component';
import { Counter2Component } from './counter-2/counter-2.component';
import { ToDoList3Component } from './to-do-list-3/to-do-list-3.component';
import { StopWatch3Component } from './stop-watch-3/stop-watch-3.component';
import { GuessNumber4Component } from './guess-number-4/guess-number-4.component';
import { TicTacToe5Component } from './tic-tac-toe-5/tic-tac-toe-5.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    // PhotoCard1Component,
    // Counter2Component,
    // ToDoList3Component,
    // StopWatch3Component,
    // GuessNumber4Component,
    TicTacToe5Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '30_Apps_Angular';
}
