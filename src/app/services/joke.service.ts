import { inject, Injectable } from '@angular/core';
import { RandomJoke } from '../random-joke-gen-10/random-joke-gen-10.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  httpClient: HttpClient = inject(HttpClient);
  url: string = 'https://official-joke-api.appspot.com/jokes/random';

  fetchJoke(): Observable<RandomJoke> {
    return this.httpClient.get<RandomJoke>(this.url);
  }
}
