import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  countActiveToInactive = 0;
  countInactiveToActive = 0;

  incrementActiveToInactive() {
    this.countActiveToInactive++;
    console.log("Active to inactive : " + this.countActiveToInactive);
  }
  incrementInactiveToActive() {
    this.countInactiveToActive++;
    console.log("Inactive to active : " + this.countInactiveToActive);
  }
}
