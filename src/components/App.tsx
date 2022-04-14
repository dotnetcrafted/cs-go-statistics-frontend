import { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import players from "../store/players";
import steamPlayers from "../store/steamPlayers";
import Home from "./pages/Home/Home";
import Wiki from "./pages/Wiki/Wiki";
import { Matches } from "./matches";

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
    <div>
      {/* <AppBar /> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
