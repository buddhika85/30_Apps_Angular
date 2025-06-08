import { Component, inject, Injectable, signal } from '@angular/core';

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
  counterStatus: string = 'NEUTRAL';

  increase() {
    ++this.count;
    this.updateStatus();
  }

  decrease() {
    --this.count;
    this.updateStatus();
  }

  updateStatus() {
    if (this.count > 0) this.counterStatus = 'POSTIVE';
    else this.counterStatus = 'NEGATIVE';
  }
}
