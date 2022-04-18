import { Row } from "antd";
import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect } from "react";
import matches from "../../../store/matches";
import MatchesCard from "./MatchesCard/MatchesCard";

const Matches: FC = () => {
  const fetchMatches = useCallback(() => {
    matches.fetchMatchesData();
  }, []);

  useEffect(() => {
    if (!matches?.data) {
      fetchMatches();
    }
  }, [fetchMatches]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {matches?.data?.matches &&
          matches.data.matches.map((match) => <MatchesCard match={match} />)}
      </Row>
    </div>
  );
};
export default observer(Matches);
