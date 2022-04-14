import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { weaponsStore } from "../../store";

export const TopWeapons = observer(() => {
  const { weapons, stats } = weaponsStore;

  const topStats = stats.slice(0, 3);

  return (
    <div>
      <h3>TOP WEAPONS</h3>
      <div>
        {topStats.map((item) => {
        const weapon = toJS(weapons[item.id]);

          return (
            <div key={item.id}>
              <div>{weapon?.Name}</div>
              <div>Kills</div>
              <div>{item.kills}</div>
              <div>Headshots</div>
              <div>{item.headShotsRatio} %</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
