/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../../core/api/client";
// import { connect } from 'react-redux';
// import { createMatchSelector } from 'connected-react-router';
import { MatchRoundModel } from "../../../models";
import MatchLayout from "./match-layout";

export const MatchController = () => {
  const { id: matchId } = useParams();
  const [match, setMatch] = useState(null);
  const [selectedRoundId, setSelectedRoundId] = useState(null);

  const fetchDataMatch = useCallback(async () => {
    try {
      const { data, status }: AxiosResponse<any> = await Axios.get(
        `matchdata?matchId=${matchId}`
      );

      if (status === 200) {
        setMatch(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [matchId]);

  useEffect(() => {
    fetchDataMatch();
  }, [fetchDataMatch]);

  const selectRound = (roundId: number): void => {
    setSelectedRoundId(roundId);
  };

  // const getRound = (): MatchRoundModel | null => {
  //   if (!match || !Array.isArray(match.rounds) || !match.rounds.length)
  //     return null;

  //   const roundId = selectedRoundId;

  //   if (!roundId) {
  //     return match.rounds[match.rounds.length - 1];
  //   }

  //   return match.rounds.find((round) => round.id === roundId) || null;
  // };

  const roundData = useMemo(() => {
    if (!match || !Array.isArray(match.rounds) || !match.rounds.length)
      return null;

    const roundId = selectedRoundId;

    if (!roundId) {
      return match.rounds[match.rounds.length - 1];
    }

    return match.rounds.find((round) => round.id === roundId) || null;
  }, [match, selectedRoundId]);

  return (
    <MatchLayout
      match={match}
      round={roundData}
      selectedRoundId={selectedRoundId}
      selectRound={selectRound}
    />
  );
};
