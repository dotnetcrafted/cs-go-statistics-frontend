import { Content } from "antd/lib/layout/layout";
import { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import players from "../store/players";
import steamPlayers from "../store/steamPlayers";
import { weaponsStore } from "../store";
import AppBar from "./AppBar/AppBar";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";
import Matches from "./pages/Matches/Matches";
import Weapons from "./pages/Weapons/Weapons";
import Wiki from "./pages/Wiki/Wiki";

const App = () => {
  const fetchPlayers = useCallback(() => {
    steamPlayers.setSteamPlayersData();
  }, []);

  useEffect(() => {
    if (!players.players) {
      fetchPlayers();
    }
  }, [fetchPlayers]);

  useEffect(() => {
    weaponsStore.fetchWeaponsData();
  }, []);

  return (
    <>
      <AppBar />

      <Content style={{ padding: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/matches/:id" element={<Match />} />
          <Route path="/weapons" element={<Weapons />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
