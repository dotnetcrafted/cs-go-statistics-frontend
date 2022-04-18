export type MatchesDetailsRoundsSquadsPlayer = {
  adr: number;
  assists: number;
  deaths: number;
  id: string;
  isDied: boolean;
  kad: string;
  kd: number;
  kdDiff: number;
  kills: number;
  score: number;
  team: string;
  ud: number;
};

export type MatchesDetailsRoundsSquads = {
  id: number;
  players: MatchesDetailsRoundsSquadsPlayer[];
  title: string;
};

export type MatchesDetailsRoundsKills = {
  id: number;
  isHeadshot: boolean;
  isPenetrated: boolean;
  isSuicide: boolean;
  killer: string;
  time: number;
  victim: string;
  weapon: number;
};

export type MatchesDetailsRounds = {
  ctScore: number;
  duration: number;
  id: number;
  kills: MatchesDetailsRoundsKills[];
  reason: number;
  reasonIconUrl: string;
  reasonTitle: string;
  squads: MatchesDetailsRoundsSquads[];
  tScore: number;
};

export type CurrentRoundData = Partial<MatchesDetailsRounds> & {
  empty: boolean;
};

export interface IMatchesDetails {
  aScore: number;
  bScore: number;
  date: string;
  duration: number;
  id: string;
  map: string;
  mapImage: string;
  rounds: MatchesDetailsRounds[];
}
