import { Descriptions } from "antd";
import { FC } from "react";
import { Player } from "../../../interfaces/players";

interface IPlayerStatistics {
  statistic: Player;
}
const PlayerStatistics: FC<IPlayerStatistics> = ({ statistic }) => {
  const {
    id,
    kills,
    deaths,
    assists,
    headShot,
    defusedBombs,
    explodedBombs,
    kdRatio,
    killsPerGame,
    assistsPerGame,
    deathsPerGame,
    friendlyKills,
    points,
  } = statistic;

  return (
    <Descriptions>
      <Descriptions.Item label="Kills">{kills}</Descriptions.Item>
      <Descriptions.Item label="Deaths">{deaths}</Descriptions.Item>
      <Descriptions.Item label="Assists">{assists}</Descriptions.Item>
      <Descriptions.Item label="HeadShots">{headShot}</Descriptions.Item>
      <Descriptions.Item label="Defused Bombs">
        {defusedBombs}
      </Descriptions.Item>
      <Descriptions.Item label="Exploded Bombs">
        {explodedBombs}
      </Descriptions.Item>
      <Descriptions.Item label="Kd Ratio">{kdRatio}</Descriptions.Item>
      <Descriptions.Item label="Kills Per Game">
        {killsPerGame}
      </Descriptions.Item>
      <Descriptions.Item label="Assists Per Game">
        {assistsPerGame}
      </Descriptions.Item>
      <Descriptions.Item label="Deaths Per Game">
        {deathsPerGame}
      </Descriptions.Item>
      <Descriptions.Item label="Friendly Kills">
        {friendlyKills}
      </Descriptions.Item>
      <Descriptions.Item label="Points">{points}</Descriptions.Item>
    </Descriptions>
  );
};

export default PlayerStatistics;
