/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from "mobx";
import { Player } from "../interfaces/players";
import players from "./players";

class CurrentPlayer {
  player: Player = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPlayer(id: string) {
    const currentPlayer = players?.players.find((player) => player.id === id);
    this.player = currentPlayer;
  }
}

export default new CurrentPlayer();
