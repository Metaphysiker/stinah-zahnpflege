import { AxiosStatic } from "axios";
import { IService } from "../interfaces/IService";
import { AxiosInstanceFactory } from "../factories/AxiosInstanceFactory";
import { ITreatment } from "@/interfaces/ITreatment";
import { TreatmentHelper } from "@/helpers/TreatmentHelper";
import { ITreatmentSearch } from "@/interfaces/ITreatmentSearch";

export class TreatmentService implements IService {
  treatmentHelper = new TreatmentHelper();
  axiosInstance: AxiosStatic;
  constructor(axios: AxiosStatic | undefined) {
    this.axiosInstance = AxiosInstanceFactory.createAxiosInstance(axios);
  }

  findAll() {
    return new Promise<ITreatment[]>((resolve, reject) => {
      this.axiosInstance
        .get("api/treatments")
        .then((response: any) => {
          const treatments = this.treatmentHelper.convertToTreatments(
            response.data
          );
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
          const createdTreatment = this.treatmentHelper.convertToTreatment(
            response.data
          );
          resolve(createdTreatment);
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
          const updatedTreatment = this.treatmentHelper.convertToTreatment(
            response.data
          );
          resolve(updatedTreatment);
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

  search(treatmentSearch: ITreatmentSearch) {
    return new Promise<ITreatment[]>((resolve, reject) => {
      this.axiosInstance
        .post("api/treatments", treatmentSearch)
        .then((response: any) => {
          const treatments = this.treatmentHelper.convertToTreatments(
            response.data
          );
          resolve(treatments);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
}
