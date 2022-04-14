export type Match = {
  aScore: number;
  bScore: number;
  date: string;
  duration: number;
  id: string;
  map: string;
  mapImage: string;
};

export type MatchesPagination = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export interface IMatches {
  matches: Match[];
  pagination: MatchesPagination;
}
