import { Avatar, Divider, Table, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { FC, useCallback } from "react";
import { Player } from "../../../interfaces/players";
import currentPlayer from "../../../store/currentPlayer";
import players from "../../../store/players";
import PlayersTableFilterForm, { DateValues } from "./PlayersTableFilterForm";

const COLUMNS = [
  {
    title: "Avatar",
    dataIndex: "ImagePath",
    key: "ImagePath",
    render: (_link: string, record: Player) => {
      if (_link) {
        return <Avatar className="players-data__avatar" src={_link} />;
      }
      return <Avatar icon="user" />;
    },
  },
  {
    title: "Name",
    dataIndex: "NickName",
    key: "NickName",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
  {
    title: "K/D/A",
    dataIndex: "kad",
    key: "kad",
  },
  {
    title: "KD Ratio",
    dataIndex: "kdRatio",
    key: "kdRatio",
    sorter: (a: Player, b: Player) => a.kdRatio - b.kdRatio,
  },
  {
    title: "KD Diff",
    dataIndex: "kdDif",
    key: "kdDif",
  },
  {
    title: "HeadShots",
    dataIndex: "headShot",
    key: "headShot",
    render: (count: number, record: Player) => {
      const headShotsPercent =
        count === 0 ? 0 : parseInt(String((count / record.kills) * 100), 10);

      return `${count}(${headShotsPercent}%)`;
    },
  },
  {
    title: "Total Games",
    dataIndex: "totalGames",
    key: "totalGames",
  },
];

const PlayersTable: FC = () => {
  const onRowClick = useCallback((id: string) => {
    currentPlayer.setCurrentPlayer(id);
  }, []);

  const onFormSubmit = useCallback((params: DateValues): void => {
    players.fetchPlayersData(params);
    // this.fetchPlayers(this.props.playersDataUrl, params);
    // const search = utils.getUrlSearch(params, this.props.router.location.search);
    // history.push({
    //     search
    // });
  }, []);

  return (
    <div>
      <Divider orientation="left">Choose Dates to Filter Statistics</Divider>

      <PlayersTableFilterForm onFormSubmit={onFormSubmit} />

      <Divider />

      <Table
        rowKey={(record: Player) => record.id}
        bordered
        pagination={false}
        dataSource={players?.players}
        columns={COLUMNS}
        size="middle"
        scroll={{ x: true }}
        onRow={(record: Player) => ({
          onClick: () => {
            onRowClick(record.id);
          },
        })}
      />
    </div>
  );
};

export default observer(PlayersTable);
