import { IHorse } from "../interfaces/IHorse";
import { DateFormatter } from "./DateFormatter";
import { DateHelper } from "./DateHelper";
export class HorseHelper {
  dateHelper = new DateHelper();
  dateFormatter = new DateFormatter();
  treated(horse: IHorse) {
    horse.lastTimeTreated = new Date();
  }

  calculateNextTreatmentDate(horse: IHorse) {
    return this.dateHelper.addDays(
      horse.lastTimeTreated,
      horse.numberOfWeeksUntilNextTreatment * 7
    );
  }

  getNextTreatmentDateString(horse: IHorse) {
    return this.dateFormatter.dddotmmdotyyyy(
      this.calculateNextTreatmentDate(horse)
    );
  }
}
