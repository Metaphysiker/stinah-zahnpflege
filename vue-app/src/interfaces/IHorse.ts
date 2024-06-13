export interface IHorse {
  id: number;
  name: string;
  lastTimeTreated: Date;
  numberOfWeeksUntilNextTreatment: number;
  birthYear: number;
  noteForNextTreatment: string;
}
