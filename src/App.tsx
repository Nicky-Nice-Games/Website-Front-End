/*import { useState } from 'react';*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import AboutUsPage from "./pages/AboutUs";
import ProcessPage from "./pages/Process";
import { ContentPage } from "./pages/content/Content";
import { TracksPage } from "./pages/content/TracksPage";
import { CharactersPage } from "./pages/content/CharactersPage";
import { ItemsPage } from "./pages/content/ItemsPage";
import HomePage from "./pages/Home";
import LeaderboardPage from "./pages/Leaderboard";
import NewsAndUpdatesPage from "./pages/NewsAndUpdates";
import PlayerStatsPage from "./pages/PlayerStats";
import NoPage from "./pages/NoPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import AuthenticationPage from "./pages/Authentication";
export interface AccountSchema {
  pid: string;
  username: string;
  pfp: number;
}

function App() {
  const [account, setAccount] = useState<AccountSchema | null>(null);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const storedPID: string | null = localStorage.getItem("pid");
    const storedUsername: string | null = localStorage.getItem("username");
    const storedPfpString: string | null = localStorage.getItem("pfp");

    if (!storedPID || !storedUsername || !storedPfpString) {
      setAccount(null);

      // Set account to dummy data for testing purposes.
      // COMMENT THIS OUT BEFORE YOU BUILD.
      // setAccount({
      //   pid: "string",
      //   username: "string",
      //   pfp: 0,
      // });
      return;
    }
    const storedAccount: AccountSchema = {
      pid: storedPID,
      username: storedUsername,
      pfp: +storedPfpString, // + sign converts string to a number
    };
    setAccount(storedAccount);
  }, []);

  return (
    <Router basename="/ggk">
      <Navbar
        account={account}
        setAccount={setAccount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/login"
            element={<AuthenticationPage setAccount={setAccount} />}
          />

          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route
            path="/home"
            element={<HomePage setCurrentPage={setCurrentPage} />}
          />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/news" element={<NewsAndUpdatesPage />} />
          <Route
            path="/stats"
            element={
              <PlayerStatsPage account={account} setAccount={setAccount} />
            }
          />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
