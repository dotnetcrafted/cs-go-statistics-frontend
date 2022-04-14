import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, toJS } from "mobx";
import { Axios } from "../core/api/client";

interface Weapon {
  id: string;
  WeaponId: number;
  Name: any;
}

interface WeaponStats {
  id: number;
  headShots: number;
  headShotsRatio: number;
  kills: number;
  killsRatio: number;
}

class WeaponsStore {
  weapons: { [key: string]: Weapon } = {};

  stats: WeaponStats[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWeaponsData() {
    try {
      const { data, status } = await axios.get<Weapon[]>(
        "https://admin.fuse8csgo.ru/weapons"
      );

      if (status === 200) {
        const weapons = {};

        data.forEach((weapon) => {
            weapons[weapon.WeaponId] = weapon;
        });
        this.weapons = weapons;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async fetchWeaponsStatsData() {
    try {
      const { data, status }: AxiosResponse<WeaponStats[]> = await Axios.get(
        "/weaponsdata"
      );

      if (status === 200) {
        this.stats = data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WeaponsStore();
