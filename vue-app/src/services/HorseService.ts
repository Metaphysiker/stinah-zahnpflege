import { AxiosStatic } from "axios";
import { IService } from "../interfaces/IService";
import { AxiosInstanceFactory } from "../factories/AxiosInstanceFactory";
import { IHorse } from "../interfaces/IHorse";
import { Horse } from "../classes/Horse";

export class HorseService implements IService {
  horse: Horse = new Horse();
  axiosInstance: AxiosStatic;
  constructor(axios: AxiosStatic | undefined) {
    this.axiosInstance = AxiosInstanceFactory.createAxiosInstance(axios);
  }

  findAll() {
    return new Promise<IHorse[]>((resolve, reject) => {
      this.axiosInstance
        .get("api/horses")
        .then((response: any) => {
          console.log(response.data);
          const horses = this.horse.convertToHorses(response.data);
          resolve(horses);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  create(horse: IHorse) {
    return new Promise<IHorse>((resolve, reject) => {
      this.axiosInstance
        .post("api/horses", horse)
        .then((response: any) => {
          const horse = this.horse.convertToHorse(response.data);
          resolve(horse);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  update(horse: IHorse) {
    return new Promise<IHorse>((resolve, reject) => {
      this.axiosInstance
        .put("api/horses", horse)
        .then((response: any) => {
          const horse = this.horse.convertToHorse(response.data);
          resolve(horse);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  delete(horse: IHorse) {
    return new Promise<void>((resolve, reject) => {
      this.axiosInstance
        .delete("api/horses/" + horse.id)
        .then((response: any) => {
          resolve();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
}
