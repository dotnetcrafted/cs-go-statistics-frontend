import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Match } from "../../../../interfaces/matches";

interface IMatchesCard {
  match: Match;
}

const MatchesCard: FC<IMatchesCard> = ({ match }) => {
  return (
    <Col span={6} key={match.id}>
      <Link to={`/matches/${match.id}`}>
        <Card
          cover={<img alt="example" src={match.mapImage} />}
          onClick={() => console.log(123)}
          hoverable
        >
          <Meta
            title={match.map}
            description={`${match.aScore} : ${match.bScore}`}
          />
        </Card>
      </Link>
    </Col>
  );
};
export default MatchesCard;
