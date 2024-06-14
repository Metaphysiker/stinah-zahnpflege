import { AxiosStatic } from "axios";
import { IService } from "../interfaces/IService";
import { AxiosInstanceFactory } from "../factories/AxiosInstanceFactory";
import { ITreatment } from "@/interfaces/ITreatment";

export class TreatmentService implements IService {
  axiosInstance: AxiosStatic;
  constructor(axios: AxiosStatic | undefined) {
    this.axiosInstance = AxiosInstanceFactory.createAxiosInstance(axios);
  }

  findAll() {
    return new Promise<ITreatment[]>((resolve, reject) => {
      this.axiosInstance
        .get("api/treatments")
        .then((response: any) => {
          const treatments = this.treatment.convertToHorses(response.data);
          resolve(treatments);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  create(treatment: ITreatment) {
    return new Promise<ITreatment>((resolve, reject) => {
      this.axiosInstance
        .post("api/treatments", treatment)
        .then((response: any) => {
          const horse = this.treatment.convertToHorse(response.data);
          resolve(horse);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  update(treatment: ITreatment) {
    return new Promise<ITreatment>((resolve, reject) => {
      this.axiosInstance
        .put("api/treatments", treatment)
        .then((response: any) => {
          const horse = this.treatment.convertToHorse(response.data);
          resolve(horse);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  delete(treatment: ITreatment) {
    return new Promise<void>((resolve, reject) => {
      this.axiosInstance
        .delete("api/treatments/" + treatment.id)
        .then((response: any) => {
          resolve();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
}
