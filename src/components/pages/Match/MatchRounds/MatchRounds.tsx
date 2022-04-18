/* eslint-disable no-plusplus */
import { Row } from "antd";
import { FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import {
  CurrentRoundData,
  MatchesDetailsRounds,
} from "../../../../interfaces/matchDetails";
import MatchRound from "./MatchRound";
import matchDetails from "../../../../store/matchDetails";

interface IMatchRounds {
  rounds: MatchesDetailsRounds[];
}

const MatchRounds: FC<IMatchRounds> = ({ rounds }) => {
  const roundsData = useMemo((): CurrentRoundData[] => {
    const roundsToRender: CurrentRoundData[] = [];

    for (let i = 0; i < 30; i++) {
      roundsToRender.push(
        rounds[i] ? { ...rounds[i], empty: false } : { id: i + 1, empty: true }
      );
    }

    return roundsToRender;
  }, [rounds]);

  console.log("roundsData", roundsData);

  return (
    <Row wrap={false}>
      {roundsData.map((round) => (
        <MatchRound
          key={round.id}
          round={round}
          select={matchDetails?.currentRound?.id === round.id}
        />
      ))}
    </Row>
  );
};

export default observer(MatchRounds);
