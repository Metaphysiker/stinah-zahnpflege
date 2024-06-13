import { IHorse } from "../interfaces/IHorse";

export class Horse implements IHorse {
  id: number;
  name: string;
  lastTimeTreated: Date;
  numberOfWeeksUntilNextTreatment: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.lastTimeTreated = new Date();
    this.numberOfWeeksUntilNextTreatment = 8;
  }

  clone(original: IHorse): IHorse {
    const horse = new Horse();
    horse.id = original.id;
    horse.name = original.name;
    horse.lastTimeTreated = new Date(original.lastTimeTreated);
    horse.numberOfWeeksUntilNextTreatment =
      original.numberOfWeeksUntilNextTreatment;
    return horse;
  }

  convertToHorse(horse: IHorse): Horse {
    this.id = horse.id;
    this.name = horse.name;
    this.numberOfWeeksUntilNextTreatment =
      horse.numberOfWeeksUntilNextTreatment;
    this.lastTimeTreated = new Date(horse.lastTimeTreated);
    return this;
  }

  convertToHorses(horses: IHorse[]): Horse[] {
    return horses.map((horse) => {
      return new Horse().convertToHorse(horse);
    });
  }
}
