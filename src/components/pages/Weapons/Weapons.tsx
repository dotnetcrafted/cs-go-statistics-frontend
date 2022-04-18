import React, { FC } from "react";
import { observer } from "mobx-react-lite";

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

const Weapons: FC = () => {
  return (
    <div>
      <div>Weapons</div>
    </div>
  );
};

export default observer(Weapons);
