import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import matchDetails from "../../../store/matchDetails";
import MatchKills from "../../MatchDetails/MatchKills";
import MatchLayout from "../../MatchDetails/MatchLayout";
import MatchRounds from "../../MatchDetails/MatchRounds";
import MatchStats from "../../MatchDetails/MatchStats";

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
