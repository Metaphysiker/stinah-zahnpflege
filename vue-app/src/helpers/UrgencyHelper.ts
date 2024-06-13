import { IHorse } from "@/interfaces/IHorse";

export class UrgencyHelper {
  calculateUrgency(horse: IHorse) {
    const now = new Date();
    const nextTimeBeschlagen = new Date();
    const difference = nextTimeBeschlagen.getTime() - now.getTime();
    return difference / (1000 * 60 * 60 * 24);
  }

  isNextWeek(horse: IHorse) {
    return this.calculateUrgency(horse) < 7;
  }

  isNextMonth(horse: IHorse) {
    return this.calculateUrgency(horse) < 30;
  }

  getColorForUrgency(horse: IHorse) {
    if (this.isNextWeek(horse)) {
      return "red";
    } else if (this.isNextMonth(horse)) {
      return "yellow";
    } else {
      return "white";
    }
  }

  getClassForUrgency(horse: IHorse) {
    if (this.isNextWeek(horse)) {
      return "bg-red";
    } else if (this.isNextMonth(horse)) {
      return "bg-yellow";
    } else {
      return "bg-white";
    }
  }
}
