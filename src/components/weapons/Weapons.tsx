import React, { useEffect } from "react";
import { toJS, values } from "mobx";
import { observer } from "mobx-react-lite";
import { Tabs } from "antd";

import { weaponsStore } from "../../store";
import { TopWeapons } from "./TopWeapons";

const { TabPane } = Tabs;

const groups = [
  { name: "Rifles", types: ["Rifle", "Sniper Rifle"] },
  { name: "SMGs", types: ["Submachine Gun", "Machine Gun"] },
  { name: "Pistols", types: ["Pistol"] },
  { name: "Heavies", types: ["Shotgun"] },
  {
    name: "Others",
    types: ["Knife", "Zeus", "Explosive Grenade", "Fire Grenade"],
  },
];

export const Weapons = observer(() => {
  const { weapons, stats } = weaponsStore;

  useEffect(() => {
    weaponsStore.fetchWeaponsData();
    weaponsStore.fetchWeaponsStatsData();
  }, []);

  // https://admin.fuse8csgo.ru/uploads/99_icon_m4a1_silencer_grey_png_307dc15bcd.png
  console.log(weapons);
  const statsByIds: Record<string, any> = {};

  stats.forEach((weapon) => {
    statsByIds[weapon.id] = toJS(weapon);
  });

  // console.log("statsByIds", toJS(statsByIds));

  if (!Object.keys(statsByIds).length) return null;

  return (
    <div style={{ background: "lightgrey" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <button type="button">Week</button>
        <button type="button">Month</button>
        <button type="button">Year</button>
      </div>
      <TopWeapons />
      <br />
      <br />

      <Tabs defaultActiveKey={groups[0].name}>
        {groups.map((group) => {
          let ids = group.types.flatMap((type) => {
            const res = Object.values(toJS(weapons)).filter((value) => {
              return value.Type.Name === type;
            });

            return res.map((x) => x.WeaponId);
          });

          ids = ids.map((id) => {
            const weapon = toJS(weapons[id]);
            const stats = statsByIds[id] ?? null;

            return { id, ...weapon, stats: stats };
          }).sort((a, b) => {
            if (b.stats === null) return -1;

            return Math.sign(b.stats?.kills - a.stats?.kills);
          })

          console.log("ids", ids);

          // const withoutStats = [];
          // const groupStats = stats.filter((statsItem) => {
          //   if (ids.includes(statsItem.id)) {
          //     return true;
          //   }

          //   withoutStats.push({ weaponId: statsItem.id });
          //   return false;
          // });

          // console.log(groupStats, withoutStats)

          // const final = [...groupStats, ...withoutStats];

          // console.log('final');

          return (
            <TabPane key={group.name} tab={group.name}>
              <div
                style={{ display: "flex", gap: "16px", textAlign: "center" }}
              >
                <div style={{ width: 200, textAlign: "left" }}>Name</div>
                <div style={{ width: 50 }}>Kills</div>
                <div style={{ width: 50 }}>Headshots</div>
              </div>
              {ids.map(({ id, Name, stats }) => {

                return (
                  <div
                    key={id}
                    style={{
                      display: "flex",
                      gap: "16px",
                      textAlign: "center",
                    }}
                  >
                    {/* <img src={weapons[weapon.id].Name} /> */}
                    <div style={{ width: 200, textAlign: "left" }}>
                      {Name}
                    </div>
                    <div style={{ width: 50 }}>{stats?.kills ?? 0}</div>
                    <div style={{ width: 50 }}>
                      {stats?.headShotsRatio ?? 0} %
                    </div>
                  </div>
                );
              })}
            </TabPane>
          );
        })}
      </Tabs>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
});
