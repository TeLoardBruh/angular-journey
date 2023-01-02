import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-controller';
  oddNumber: number[] = [];
  eventNumber: number[] = [];

  startInterval(intervalNumber: number) {
    console.log(intervalNumber);

    if (intervalNumber % 2 !== 0) {
      this.oddNumber.push(intervalNumber);
    } else if (intervalNumber % 2 === 0) {
      this.eventNumber.push(intervalNumber);
    }
  }
}
