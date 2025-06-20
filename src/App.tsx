/*import { useState } from 'react';*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import {
  ContentPage,
  CharactersPage,
  ItemsPage,
  TracksPage,
}
  from './pages/Content';
import ForumPage from './pages/Forum';
import HomePage from './pages/Home';
import LeaderboardPage from './pages/Leaderboard';
import NewsAndUpdatesPage from './pages/NewsAndUpdates';
import PlayerStatsPage from './pages/PlayerStats';
import NoPage from './pages/NoPage';
import Navbar from './Navbar';
import ForumPost from './pages/ForumPost';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

export interface AccountSchema { 
  pid: string;
  username: string;
}

function App() {
  const [account, setAccount] = useState<AccountSchema | null>(null);

  useEffect(() => {
    const storedPID: string | null = localStorage.getItem("pid");
    const storedUsername: string | null = localStorage.getItem("username");
    if (!storedPID || !storedUsername) { setAccount(null); return; }
    const storedAccount: AccountSchema = {
      pid: storedPID,
      username: storedUsername
    }
    setAccount(storedAccount);
  }, []);

  return (
    <Router basename="/web">
      <Navbar account={account} setAccount={setAccount}/>
      <div className='min-h-190'>
        <Routes>
        <Route path="/login" element={<LoginPage setAccount={setAccount}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/news" element={<NewsAndUpdatesPage />} />
        <Route path="/stats" element={<PlayerStatsPage />} />
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

