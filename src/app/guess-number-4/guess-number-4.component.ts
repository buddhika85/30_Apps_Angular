import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number-4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guess-number-4.component.html',
  styleUrl: './guess-number-4.component.scss',
})
export class GuessNumber4Component implements OnInit {
  guessNumber: number | null = null;
  static MAX_GUESS_COUNT: number = 10;
  private randomNumber!: number; //  definite assignment assertion operator, will be assigned before we use it
  private guessCount!: number;
  private result!: string;
  private gameOver!: boolean;

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.guessNumber = null;
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guessCount = 0;
    this.result = '';
    this.gameOver = false;
  }

  play(): void {
    if (this.guessNumber !== null) {
      ++this.guessCount;
      this.setGameResult();
    }
  }

  private setGameResult(): void {
    if (
      this.guessCount === GuessNumber4Component.MAX_GUESS_COUNT &&
      this.randomNumber != this.guessNumber
    ) {
      this.result = `Game Over. Better luck next time. The Random number is ${this.randomNumber}`;
      this.gameOver = true;
    } else if (
      this.guessNumber !== null &&
      this.randomNumber > this.guessNumber
    ) {
      this.result = 'Go high !, Try Again';
    } else if (
      this.guessNumber !== null &&
      this.randomNumber < this.guessNumber
    ) {
      this.result = 'Go low !, Try Again';
    } else {
      this.result = 'Wow good job, you guessed correct';
      this.guessNumber = null;
      this.gameOver = true;
    }
  }

  getAttemptsLeft(): number {
    return GuessNumber4Component.MAX_GUESS_COUNT - this.guessCount;
  }

  playMore(): boolean {
    return (
      GuessNumber4Component.MAX_GUESS_COUNT > this.guessCount && !this.gameOver
    );
  }

  getResult(): string {
    return this.result;
  }

  isGameOver(): boolean {
    return this.gameOver;
  }
}
