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
  board!: Board;
  resultText!: string;
  gameOver!: boolean;
  humanPlayerName: string = 'Player';
  computerPlayerName: string = 'Computer';
  humanPlayerMarker: string = 'X';
  computerPlayerMarker: string = '0';

  constructor() {
    this.setupBoard();
  }

  onClick(squareIndex: number) {
    //const squareClickedOn = this.board.getSquareByIndex(squareIndex);
    //console.log(`Clicked on ${squareClicked?.index}`);

    const clickSuccess = this.playerSelectSquare(squareIndex);
    if (clickSuccess) {
      if (this.checkIfItsPlayerWon()) {
        this.resultText = 'You, won !';
        this.gameOver = true;
        return;
      }

      // if not - computers turn
      let unselectedSqaures: Square[] = this.board.getUnselectedSqaures();
      if (unselectedSqaures.length == 0) {
        this.resultText = 'Its a draw.';
        return;
      }

      // computer selecting
      this.computerSelectASquare();
      if (this.checkIfComputerWon()) {
        this.resultText = 'Compter, won !';
        this.gameOver = true;
        return;
      }

      unselectedSqaures = this.board.getUnselectedSqaures();
      if (unselectedSqaures.length == 0) {
        this.resultText = 'Its a draw.';
        this.gameOver = true;
        return;
      }
    }
  }

  private playerSelectSquare(squareIndex: number): boolean {
    return this.board.selectASquareByClicking(
      squareIndex,
      this.humanPlayerName,
      this.humanPlayerMarker
    );
  }

  private computerSelectASquare() {
    this.board.selectRandomFreeSquare(
      this.computerPlayerName,
      this.computerPlayerMarker
    );
  }

  private checkIfItsPlayerWon(): boolean {
    return this.board.checkWon(this.humanPlayerName);
  }

  private checkIfComputerWon(): boolean {
    return this.board.checkWon(this.computerPlayerName);
  }

  setupBoard() {
    this.board = new Board();
    this.resultText = '';
    this.gameOver = false;
  }
}

export class Board {
  squares: Square[] = [];
  private sqaureCount = 9;
  private winCombinations: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7],
  ];

  constructor() {
    for (let i = 1; i <= this.sqaureCount; i++) {
      this.squares.push(new Square(i));
    }
  }

  getSquareByIndex(index: number): Square | null {
    const filteredSquares = this.squares.filter((x) => x.index == index);
    return filteredSquares.length == 1 ? filteredSquares[0] : null;
  }

  getUnselectedSqaures(): Square[] {
    return this.squares.filter((x) => !x.clicked);
  }

  checkWon(owner: string): boolean {
    let ownerWon: boolean = false;
    const selectedSquares: number[] = this.squares
      .filter((x) => x.owner === owner)
      .map((x) => x.index)
      .sort();

    for (let i = 0; !ownerWon && i < this.winCombinations.length; i++) {
      const combination = this.winCombinations[i];
      if (!ownerWon && this.combinationFound(combination, selectedSquares)) {
        ownerWon = true;
      }
    }
    return ownerWon;
  }

  combinationFound(combination: number[], selectedSquares: number[]): boolean {
    const intersection = selectedSquares.filter((x) => combination.includes(x));
    return intersection.length === combination.length;
  }

  selectRandomFreeSquare(owner: string, mark: string): void {
    const unselectedSqaures = this.getUnselectedSqaures();
    const randomSquare =
      unselectedSqaures[Math.floor(Math.random() * unselectedSqaures.length)];
    randomSquare.clicked = true;
    randomSquare.owner = owner;
    randomSquare.text = mark;
  }

  selectASquareByClicking(
    squareIndex: number,
    owner: string,
    mark: string
  ): boolean {
    const squareClickedOn = this.getSquareByIndex(squareIndex);
    if (squareClickedOn && !squareClickedOn.clicked) {
      squareClickedOn.clicked = true;
      squareClickedOn.owner = owner;
      squareClickedOn.text = mark;
      return true;
    }
    return false; // cannot select
  }
}

export class Square {
  index: number = 0;
  text: string = '';
  clicked: boolean = false;
  owner: string = '';

  constructor(index: number) {
    this.index = index;
  }
}
