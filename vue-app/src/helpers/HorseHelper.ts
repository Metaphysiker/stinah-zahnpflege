import { IHorse } from "../interfaces/IHorse";
import { DateHelper } from "./DateHelper";
export class HorseHelper {
  dateHelper = new DateHelper();
  treated(horse: IHorse) {
    horse.lastTimeTreated = new Date();
    this.calculateAndSetNextTimeBeschlagen(horse);
  }

  calculateAndSetNextTimeBeschlagen(horse: IHorse) {
    return this.dateHelper.addDays(
      horse.lastTimeTreated,
      horse.numberOfWeeksUntilNextTreatment * 7
    );
  }
}
