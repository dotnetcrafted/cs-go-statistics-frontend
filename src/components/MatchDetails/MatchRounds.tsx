/* eslint-disable no-plusplus */
import { Col, Row } from "antd";
import { FC, useMemo } from "react";
import { MatchesDetailsRounds } from "../../interfaces/matchDetails";

interface IMatchRounds {
  rounds: MatchesDetailsRounds[];
}

const MatchRounds: FC<IMatchRounds> = ({ rounds }) => {
  const roundsData = useMemo(() => {
    const roundsToRender: Array<
      Partial<MatchesDetailsRounds> & { empty: boolean }
    > = [];
    for (let i = 0; i < 30; i++) {
      roundsToRender.push(
        rounds[i] ? { ...rounds[i], empty: false } : { id: i + 1, empty: true }
      );
    }

    console.log("roundsToRender", roundsToRender);

    return roundsToRender.map((round) => {
      if (!round?.empty) {
        return <Col flex="auto">{round.id}</Col>;
      }
      return <Col flex="auto">{round.id}</Col>;
    });
  }, [rounds]);

  return <Row>{roundsData}</Row>;
};

export default MatchRounds;
