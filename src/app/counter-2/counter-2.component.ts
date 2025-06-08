import { Component, inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-counter-2',
  standalone: true,
  imports: [],
  templateUrl: './counter-2.component.html',
  styleUrl: './counter-2.component.scss',
})
export class Counter2Component {
  counter = inject(Counter);
}

@Injectable({ providedIn: 'root' })
export class Counter {
  count: number = 0;

  increase() {
    ++this.count;
  }

  decrease() {
    --this.count;
  }
}
