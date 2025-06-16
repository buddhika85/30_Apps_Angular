import { Component, inject, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-random-joke-gen-10',
  standalone: true,
  imports: [],
  templateUrl: './random-joke-gen-10.component.html',
  styleUrl: './random-joke-gen-10.component.scss',
})
export class RandomJokeGen10Component {
  jokeService: JokeService = inject(JokeService);
  randomJoke: RandomJoke | null = null;
  errorMessage: string =
    'Error: Fetching joke from external API did not work. Please try again !';
  showError: boolean = false;
  loadingText: string = 'Loading ....';
  showLoading: boolean = false;
  getJokeBtnDisabled: boolean = false;

  getRandomJoke(): void {
    this.randomJoke = null;
    this.showError = false;
    this.getJokeBtnDisabled = true;
    this.showLoading = true;
    this.jokeService.fetchJoke().subscribe({
      next: (data) => {
        this.randomJoke = data;
        this.getJokeBtnDisabled = false;
        this.showLoading = false;
      },
      error: (error) => {
        this.showError = true;
        this.getJokeBtnDisabled = false;
        this.showLoading = false;
      },
      complete: () => {},
    });
  }
}

export interface RandomJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
