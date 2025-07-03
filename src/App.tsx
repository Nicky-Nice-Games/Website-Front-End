/*import { useState } from 'react';*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import AboutUsPage from './pages/AboutUs';
import ProcessPage from './pages/Process';
import {
  ContentPage,
  CharactersPage,
  ItemsPage,
  TracksPage,
} from "./pages/Content";
import ForumPage from "./pages/Forum";
import HomePage from "./pages/Home";
import LeaderboardPage from "./pages/Leaderboard";
import NewsAndUpdatesPage from "./pages/NewsAndUpdates";
import PlayerStatsPage from "./pages/PlayerStats";
import NoPage from "./pages/NoPage";
import Navbar from "./Navbar";
import ForumPost from "./pages/ForumPost";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

const [currentSrc, setCurrentSrc] = useState<string>("/images/placeholder.PNG");
const [isEditing, setIsEditing] = useState(false);

export interface AccountSchema {
  pid: string;
  username: string;
  pfpUrl: string;
}

function App() {
  const [account, setAccount] = useState<AccountSchema | null>(null);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const storedPID: string | null = localStorage.getItem("pid");
    const storedUsername: string | null = localStorage.getItem("username");
    const storedPfpUrl: string | null = localStorage.getItem("imglink");

    if (!storedPID || !storedUsername || !storedPfpUrl) {
      setAccount(null);
      return;
    }
    const storedAccount: AccountSchema = {
      pid: storedPID,
      username: storedUsername,
      pfpUrl: storedPfpUrl,
    };
    setAccount(storedAccount);
  }, []);

  return (
    <Router basename="/web">
      <Navbar
        account={account}
        setAccount={setAccount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/login" element={<LoginPage setAccount={setAccount}/>} />
        <Route path="/signup" element={<SignupPage setAccount={setAccount}/>} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/process" element={<ProcessPage/>}/>
        <Route path="/content" element={<ContentPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/home" element={<HomePage setCurrentPage={setCurrentPage}/>} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/news" element={<NewsAndUpdatesPage />} />
        <Route path="/stats" element={<PlayerStatsPage account={account} setAccount={setAccount}/>} />
        <Route path="/forumPost" element={<ForumPost />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
