import { FC, memo, useMemo } from "react";
import clsx from "clsx";
import { Col, Image } from "antd";
import { CurrentRoundData } from "../../../../interfaces/matchDetails";
import matchDetails from "../../../../store/matchDetails";

interface IMatchRound {
  round: CurrentRoundData;
  select: boolean;
}

const MatchRound: FC<IMatchRound> = ({ round, select }) => {
  const checkWinner = useMemo((): { top: boolean; bottom: boolean } => {
    if (round.id <= 15) {
      if ([1, 9].includes(round.reason)) {
        return { top: true, bottom: false };
      }
      return { top: false, bottom: true };
    }
    if (![1, 9].includes(round.reason)) {
      return { top: true, bottom: false };
    }
    return { top: false, bottom: true };
  }, [round]);

  return (
    <>
      {!round.empty && (
        <Col
          key={round.id}
          flex="auto"
          onClick={() => matchDetails.selectRound(round)}
        >
          <div
            className={clsx(
              "flex flex-col items-center p-1 cursor-pointer rounded-2px",
              { "bg-black": select }
            )}
          >
            {checkWinner.top && (
              <Image preview={false} width={24} src={round.reasonIconUrl} />
            )}
            {checkWinner.bottom && <div className="h-6 w-6" />}

            <div
              className={clsx(
                "self-stretch border-t-4 border-b-4 border-red-100 my-1",
                {
                  "border-t-green-100": checkWinner.top,
                  "border-b-green-100": checkWinner.bottom,
                }
              )}
            >
              {round.id}
            </div>

            {checkWinner.bottom && (
              <Image preview={false} width={24} src={round.reasonIconUrl} />
            )}
            {checkWinner.top && <div className="h-6 w-6" />}
          </div>
        </Col>
      )}

      {round.empty && (
        <Col key={round.id} flex="auto">
          <div
            className={clsx("flex flex-col items-center p-1 rounded-2px", {
              "bg-black": matchDetails?.currentRound?.id === round.id,
            })}
          >
            <div className="h-6 w-6" />
            <div className="self-stretch border-t-4 border-b-4 border-red-100 my-1">
              {round.id}
            </div>
            <div className="h-6 w-6" />
          </div>
        </Col>
      )}
    </>
  );
};

export default memo(MatchRound);
