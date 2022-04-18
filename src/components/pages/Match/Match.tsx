import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import matchDetails from "../../../store/matchDetails";
import MatchKills from "./MatchKills/MatchKills";
import MatchLayout from "./MatchLayout/MatchLayout";
import MatchRounds from "./MatchRounds/MatchRounds";
import MatchStats from "./MatchStats/MatchStats";

const Match: FC = () => {
  const { id } = useParams();

  const fetchMatchDetails = useCallback(() => {
    matchDetails.fetchMatchDetails(id);
  }, [id]);

  useEffect(() => {
    fetchMatchDetails();
  }, [fetchMatchDetails]);

  return (
    <div>
      {matchDetails?.data && (
        <MatchLayout>
          <MatchRounds rounds={matchDetails.data.rounds} />
          <MatchStats />
          <MatchKills />
        </MatchLayout>
      )}
    </div>
  );
};
export default observer(Match);
