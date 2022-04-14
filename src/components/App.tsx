import { Content } from "antd/lib/layout/layout";
import { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import players from "../store/players";
import steamPlayers from "../store/steamPlayers";
import AppBar from "./AppBar/AppBar";
import Home from "./pages/Home/Home";
import Wiki from "./pages/Wiki/Wiki";
import Matches from "./pages/Matches/Matches";
import { Weapons } from "./weapons";

const App = () => {
  const fetchPlayers = useCallback(() => {
    steamPlayers.setSteamPlayersData();
  }, []);

  useEffect(() => {
    if (!players.players) {
      fetchPlayers();
    }
  }, [fetchPlayers]);

  return (
    <>
      <AppBar />

      <Content style={{ padding: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/weapons" element={<Weapons />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
