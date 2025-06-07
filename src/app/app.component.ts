import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCard1Component } from './photo-card-1/photo-card-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoCard1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '30_Apps_Angular';
}
