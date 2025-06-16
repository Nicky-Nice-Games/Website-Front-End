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
    if (!storedPID || !storedUsername) return;
    const storedAccount: AccountSchema = {
      pid: storedPID,
      username: storedUsername
    }
    setAccount(storedAccount);
  }, []);

  return (
    <Router>
      <Navbar account={account} setAccount={setAccount}/>
      <div className='min-h-190'>
        <Routes>
        <Route path="/web/login" element={<LoginPage setAccount={setAccount}/>} />
        <Route path="/web/about" element={<AboutPage />} />
        <Route path="/web/content/*" element={<ContentPage />} />
        <Route path="/web/forum" element={<ForumPage />} />
        <Route path="/web" element={<HomePage />} />
        <Route path="/web/leaderboard" element={<LeaderboardPage />} />
        <Route path="/web/news" element={<NewsAndUpdatesPage />} />
        <Route path="/web/stats" element={<PlayerStatsPage />} />
        <Route path="/web/forumPost" element={<ForumPost />} />
        <Route path="/web/characters" element={<CharactersPage />} />
        <Route path="/web/tracks" element={<TracksPage />} />
        <Route path="/web/items" element={<ItemsPage />} />
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      </div>
      <Footer />
      
    </Router>
  
  );
}

  

export default App;

