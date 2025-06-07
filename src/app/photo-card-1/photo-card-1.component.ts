import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-card-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './photo-card-1.component.html',
  styleUrl: './photo-card-1.component.scss',
})
export class PhotoCard1Component implements OnInit {
  user: UserDto = null!;
  ngOnInit(): void {
    this.user = { name: '', age: '', description: '' };
  }
}

export interface UserDto {
  name: string;
  age: string;
  description: string;
}
