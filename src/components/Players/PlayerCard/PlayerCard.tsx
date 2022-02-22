import { Avatar, Card, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import Title from "antd/lib/typography/Title";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import currentPlayer from "../../../store/currentPlayer";
import PlayerStatistics from "./PlayerStatistics";

const PlayersCard: FC = observer(() => {
  const renderAvatar = (image: string): JSX.Element => {
    if (image) {
      return <Avatar size={48} shape="square" src={image} />;
    }
    return <Avatar size={48} shape="square" icon="user" />;
  };

  console.log(12312, currentPlayer.player);

  return (
    <Card>
      <Meta
        avatar={renderAvatar(currentPlayer?.player?.ImagePath)}
        title={<Title level={2}>{currentPlayer?.player?.NickName}</Title>}
      />

      <Divider orientation="left">Player`s Statistics</Divider>
      {currentPlayer?.player && (
        <PlayerStatistics statistic={currentPlayer.player} />
      )}

      <Divider orientation="left">Top 5 Guns Used</Divider>
      <div>Top 5 Guns Used</div>

      <Divider orientation="left">Victims</Divider>
      <div>Victims</div>
    </Card>
  );
});

export default PlayersCard;
