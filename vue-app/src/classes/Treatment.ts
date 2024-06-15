import { ITreatment } from "@/interfaces/ITreatment";

export class Treatment implements ITreatment {
  id: number;
  note: string;
  noteForNextTreatment: string;
  horseId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = 0;
    this.note = "";
    this.noteForNextTreatment = "";
    this.horseId = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
