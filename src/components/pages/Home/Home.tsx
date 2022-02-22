import { Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import currentPlayer from "../../../store/currentPlayer";
import PlayersCard from "../../Players/PlayerCard/PlayerCard";
import PlayersTable from "../../Players/PlayersTable/PlayersTable";

const Home: FC = observer(() => (
  <Row>
    <Col xs={24} lg={14}>
      <PlayersTable />
    </Col>

    {currentPlayer?.player && (
      <Col xs={24} lg={{ span: 9, offset: 1 }}>
        <PlayersCard />
      </Col>
    )}
  </Row>
));

export default Home;
