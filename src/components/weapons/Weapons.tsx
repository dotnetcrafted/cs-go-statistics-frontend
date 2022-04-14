import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { weaponsStore } from "../../store";

export const Weapons = observer(() => {
  const { weapons, stats } = weaponsStore;

  useEffect(() => {
    weaponsStore.fetchWeaponsData();
    weaponsStore.fetchWeaponsStatsData();
  }, []);

  return <>
    {stats.map((weapon) => {
        return <div key={weapon.id}>{weapon.kills}</div>
    })}
  </>;
});
