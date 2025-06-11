import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tic-tac-toe-5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tic-tac-toe-5.component.html',
  styleUrl: './tic-tac-toe-5.component.scss',
})
export class TicTacToe5Component {
  board: Board = new Board();
}

export class Board {
  squares: Square[] = [];

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.squares.push(new Square(i));
    }
  }
}

export class Square {
  index: number | null = null;
  text: string = '-';

  constructor(index: number) {
    this.index = index;
  }
}
