import { IHorse } from "../interfaces/IHorse";

export class Horse implements IHorse {
  id: number;
  name: string;
  lastTimeTreated: Date;
  numberOfWeeksUntilNextTreatment: number;
  noteForNextTreatment: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = 0;
    this.name = "";
    this.lastTimeTreated = new Date();
    this.numberOfWeeksUntilNextTreatment = 8;
    this.noteForNextTreatment = "";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  clone(original: IHorse): IHorse {
    const horse = new Horse();
    horse.id = original.id;
    horse.name = original.name;
    horse.lastTimeTreated = new Date(original.lastTimeTreated);
    horse.numberOfWeeksUntilNextTreatment =
      original.numberOfWeeksUntilNextTreatment;
    horse.noteForNextTreatment = original.noteForNextTreatment;
    horse.createdAt = new Date(original.createdAt);
    horse.updatedAt = new Date(original.updatedAt);
    return horse;
  }

  convertToHorse(horse: IHorse): Horse {
    this.id = horse.id;
    this.name = horse.name;
    this.numberOfWeeksUntilNextTreatment =
      horse.numberOfWeeksUntilNextTreatment;
    this.lastTimeTreated = new Date(horse.lastTimeTreated);
    this.noteForNextTreatment = horse.noteForNextTreatment;
    this.createdAt = new Date(horse.createdAt);
    this.updatedAt = new Date(horse.updatedAt);
    return this;
  }

  convertToHorses(horses: IHorse[]): Horse[] {
    return horses.map((horse) => {
      return new Horse().convertToHorse(horse);
    });
  }
}
