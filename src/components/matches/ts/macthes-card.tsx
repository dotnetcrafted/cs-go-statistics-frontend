import React from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import { BaseMatchModel } from "../../../models";
import { getDuration } from "../../../project/helpers";

interface MatchesCardProps {
  match: BaseMatchModel | null;
}

export const MatchesCard: React.FC<MatchesCardProps> = ({ match }) => {
  if (!match) return null;

  const duration = getDuration(match.duration);

  return (
    <Link className="matches-card" to={`/matches/${match.id}`}>
      <div className="matches-card__header">
        <img className="matches-card__image" src={match.mapImage} alt="" />
        <div className="matches-card__date">
          {format(parseISO(match.date), "dd MMM HH:mm")}
        </div>
      </div>
      <div className="matches-card__main">
        <h3 className="matches-card__title">{match.map}</h3>
        <div className="matches-card__score">
          <span className="color-t-primary">{match.aScore}</span>
          <span className="matches-card__colon">:</span>
          <span className="color-ct-primary">{match.bScore}</span>
        </div>
        <div className="matches-card__duration">
          {duration.hours
            ? `${duration.hours} h ${duration.minutes} min`
            : `${duration.minutes} min`}
        </div>
      </div>
    </Link>
  );
};
