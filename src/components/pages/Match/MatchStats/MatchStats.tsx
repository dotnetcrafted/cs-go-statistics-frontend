/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Table } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { FC, useCallback, useMemo } from "react";
import matchDetails from "../../../../store/matchDetails";
import { columns } from "../../../match/ts/enums";
import { MatchesDetailsRoundsSquads } from "../../../../interfaces/matchDetails";
import players from "../../../../store/players";
import steamPlayers from "../../../../store/steamPlayers";

const MatchStats: FC = () => {
  console.log("MatchDetails", toJS(matchDetails.currentRound));

  const playersData = useCallback((squad: MatchesDetailsRoundsSquads) => {
    return squad.players.map((player) => {
      const cmsPlayer = toJS(steamPlayers.steamPlayers).find(
        (i) => i.SteamId === player.id
      );
      console.log("cmsPlayer", cmsPlayer);

      return {
        id: player.id,
        rank: cmsPlayer.Rang,
        name: cmsPlayer.NickName,
        // kad: maskedKad,
        // kd: `${maskedKd}.${splittedKd[1]}`,
        // kdDiff: getTableValueByMask(
        //   [player.kdDiff],
        //   [-digitPlaces.kdDiff]
        // ),
        // adr: getTableValueByMask([player.adr], [digitPlaces.adr]),
        // ud: getTableValueByMask([player.ud], [digitPlaces.ud]),
        // score: getTableValueByMask([player.score], [digitPlaces.score]),
      };
    });
  }, []);

  return (
    <div>
      {matchDetails?.currentRound?.squads.map((squad) => (
        <Table
          rowKey={(record: any) => record.id}
          dataSource={playersData(squad)}
          columns={columns}
          bordered={false}
          pagination={false}
        />
      ))}
    </div>
  );
};
export default observer(MatchStats);
