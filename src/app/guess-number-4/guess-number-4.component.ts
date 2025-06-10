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
  private maxGuessCount: number = 3;
  private randomNumber!: number; //  definite assignment assertion operator, will be assigned before we use it
  private guessCount!: number;
  private result!: string;
  private isWonOrLost!: boolean;

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.guessNumber = null;
    this.randomNumber = 1;
    Math.floor(Math.random() * 100) + 1;
    this.guessCount = 0;
    this.result = '';
    this.isWonOrLost = false;
  }

  play(): void {
    if (this.guessNumber !== null) {
      ++this.guessCount;
      this.setGameResult();
    }
  }

  private setGameResult(): void {
    if (
      this.guessCount === this.maxGuessCount &&
      this.randomNumber != this.guessNumber
    ) {
      this.result = `Ohh no, the random number is ${this.randomNumber}`;
      this.isWonOrLost = true;
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
      this.isWonOrLost = true;
    }
  }

  getAttemptsLeft(): number {
    return this.maxGuessCount - this.guessCount;
  }

  playMore(): boolean {
    return this.maxGuessCount > this.guessCount && !this.isWonOrLost;
  }

  getResult(): string {
    return this.result;
  }

  getIsWonOrLost(): boolean {
    return this.isWonOrLost;
  }
}
