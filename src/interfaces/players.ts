import { ISteamPlayers } from "./steamPlayers";

export type Player = ISteamPlayers & {
  achievements: any[];
  assists: number;
  assistsPerGame: number;
  deaths: number;
  deathsPerGame: number;
  defusedBombs: number;
  explodedBombs: number;
  friendlyKills: number;
  guns: any[];
  headShot: number;
  id: string;
  kad: string;
  kdDif: number;
  kdRatio: number;
  killers: any[];
  kills: number;
  killsPerGame: number;
  points: number;
  steamId: string;
  totalGames: number;
  victims: any[];
};

export interface IPlayers {
  dateFrom: string;
  dateTo: string;
  players: Player[];
}
