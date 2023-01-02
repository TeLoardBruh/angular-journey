import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output('startInterval') intervalFire = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  startIntveral() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  pasueInterval() {
    clearInterval(this.interval);
  }
}
