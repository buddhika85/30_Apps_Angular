import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, signal } from '@angular/core';

@Component({
  selector: 'app-counter-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-2.component.html',
  styleUrl: './counter-2.component.scss',
})
export class Counter2Component {
  counter = inject(Counter);
}

@Injectable({ providedIn: 'root' })
export class Counter {
  count = signal(0);
  counterStatus = signal('NEUTRAL');

  increase() {
    this.count.update((x) => x + 1);
    this.updateStatus();
  }

  decrease() {
    this.count.update((x) => x - 1);
    this.updateStatus();
  }

  updateStatus() {
    if (this.count() > 0) this.counterStatus.set('POSITIVE');
    else if (this.count() === 0) this.counterStatus.set('NEUTRAL');
    else this.counterStatus.set('NEGATIVE');
  }
}
