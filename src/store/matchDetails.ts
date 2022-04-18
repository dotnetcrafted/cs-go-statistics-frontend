/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { Axios } from "../core/api/client";
import { CurrentRoundData, IMatchesDetails } from "../interfaces/matchDetails";

class MatchDetails {
  data: IMatchesDetails = null;

  currentRound: CurrentRoundData = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMatchDetails(matchId: string) {
    try {
      const { data, status }: AxiosResponse<IMatchesDetails> = await Axios.get(
        `matchdata?matchId=${matchId}`
      );

      if (status === 200) {
        this.data = data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  selectRound(round: CurrentRoundData) {
    this.currentRound = round;
  }
}

export default new MatchDetails();
