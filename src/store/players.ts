/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/require-await */
import { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { DateValues } from "../components/Players/PlayersTable/PlayersTableFilterForm";
import { Axios } from "../core/api/client";
import { IPlayers, Player } from "../interfaces/players";
import { ISteamPlayers } from "../interfaces/steamPlayers";

class Players {
  players: Player[] = null;

  constructor() {
    makeAutoObservable(this);
  }

  async setPlayersData(steamDataPlayers: ISteamPlayers[]) {
    try {
      const { data, status }: AxiosResponse<IPlayers> = await Axios.get(
        "playersdata"
      );

      if (status === 200) {
        console.log("steamDataPlayers", steamDataPlayers);
        console.log("playersdata", data);
        const result = {
          ...data,
          players: data.players.map((i) => {
            const steamPlayer = steamDataPlayers.find(
              (player) => player.SteamId === i.steamId
            );
            if (steamPlayer) {
              return { ...i, ...steamPlayer };
            }
            return i;
          }),
        };

        console.log("result", result.players);
        this.players = result.players;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPlayersData(params?: DateValues) {
    try {
      const { data, status }: AxiosResponse<IPlayers> = await Axios.get(
        "playersdata",
        {
          params,
        }
      );

      if (status === 200) {
        this.players = data.players;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Players();
