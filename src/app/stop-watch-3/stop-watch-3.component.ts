import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-stop-watch-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stop-watch-3.component.html',
  styleUrl: './stop-watch-3.component.scss',
})
export class StopWatch3Component {
  stopWatch: StopWatch = inject(StopWatch);
  startOrEnd() {
    this.stopWatch.getIsRunning()
      ? this.stopWatch.stop()
      : this.stopWatch.start();
  }

  reset() {
    this.stopWatch.reset();
  }
}

@Injectable({ providedIn: 'root' })
export class StopWatch {
  private elapsedTime = 0.0;
  private isRunning = false;
  private timerRef: any = null;

  start() {
    this.isRunning = true;
    this.timerRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100); // wait 100 milli seconds
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.timerRef);
  }

  reset() {
    this.stop();
    this.elapsedTime = 0.0;
    this.timerRef = null;
  }

  getIsRunning() {
    return this.isRunning;
  }

  getElapsedTime() {
    return this.elapsedTime;
  }
}
