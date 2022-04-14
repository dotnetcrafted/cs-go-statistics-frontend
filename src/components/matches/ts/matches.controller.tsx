/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { MatchesModel } from "../../../models";
import { MatchesLayout } from "./matches-layout";

// interface MatchesControllerState {
//   matches: MatchesModel | null;
// }

// export class MatchesControllerwe extends React.Component<
//   any,
//   MatchesControllerState
// > {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       matches: null,
//     };
//   }

//   componentDidMount(): void {
//     fetch("/api/matchesdata")
//       .then((res: Response) => res.json())
//       .then((data) => {
//         this.setState({
//           matches: data.matches,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render(): ReactNode {
//     return <MatchesLayout matches={this.state.matches} />;
//   }
// }

export const MatchesController: FC = () => {
  const [matches, setMatches] = useState(null);

  const fetchData = useCallback(() => {
    fetch("/api/matchesdata")
      .then((res: Response) => res.json())
      .then((data) => {
        setMatches({
          matches: data.matches,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <MatchesLayout matches={matches} />;
};
