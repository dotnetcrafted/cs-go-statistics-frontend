import { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { Axios } from "../core/api/client";
import { ISteamPlayers } from "../interfaces/steamPlayers";
import players from "./players";

class SteamPlayers {
  steamPlayers: ISteamPlayers[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async setSteamPlayersData() {
    try {
      const { data, status }: AxiosResponse<ISteamPlayers[]> = await Axios.get(
        "/bot/playerslist"
      );

      if (status === 200) {
        this.steamPlayers = data;
        players.setPlayersData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SteamPlayers();
