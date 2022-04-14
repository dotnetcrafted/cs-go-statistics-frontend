import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import matchDetails from "../../store/matchDetails";

const MatchLayout: FC = ({ children }) => (
  <div>
    <Row align="middle">
      <Col>
        <Title>{matchDetails.data.map}</Title>
      </Col>

      <Col flex="auto">{`${matchDetails?.data?.aScore}:${matchDetails?.data?.bScore}`}</Col>

      <Col>
        <div>{matchDetails?.data?.date}</div>
        <div>{matchDetails?.data?.duration}</div>
      </Col>
    </Row>

    <div>{children}</div>
  </div>
);
export default observer(MatchLayout);
