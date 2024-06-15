export interface IHorse {
  id: number;
  name: string;
  lastTimeTreated: Date;
  numberOfWeeksUntilNextTreatment: number;
  noteForNextTreatment: string;
  createdAt: Date;
  updatedAt: Date;
}
