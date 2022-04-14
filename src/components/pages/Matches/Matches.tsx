import { Card, Col, Row, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import matches from "../../../store/matches";

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
          matches.data.matches.map((match) => (
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
          ))}
      </Row>
    </div>
  );
};
export default observer(Matches);
