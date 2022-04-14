import { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { Axios } from "../core/api/client";
import { IMatches } from "../interfaces/matches";

class Matches {
  data: IMatches = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMatchesData() {
    try {
      const { data, status }: AxiosResponse<IMatches> = await Axios.get(
        "matchesdata"
      );

      if (status === 200) {
        console.log("matchesdata", data);
        this.data = data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Matches();
