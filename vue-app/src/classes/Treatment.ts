import { ITreatment } from "@/interfaces/ITreatment";

export class Treatment implements ITreatment {
  id: number;
  note: string;
  noteForNextTreatment: string;
  horseId: number;

  constructor() {
    this.id = 0;
    this.note = "";
    this.noteForNextTreatment = "";
    this.horseId = 0;
  }
}
