/*import { useState } from 'react';*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import ContentPage from './pages/Content';
import ForumPage from './pages/Forum';
import HomePage from './pages/Home';
import LeaderboardPage from './pages/Leaderboard';
import NewsAndUpdatesPage from './pages/NewsAndUpdates';
import PlayerStatsPage from './pages/PlayerStats';



import NoPage from './pages/NoPage';


function NavBar() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: '1rem 0' }}>
      <button
        style={{ marginRight: '0.5rem' }}
        onClick={() => navigate('/')}>
        Login
      </button>

      <button
        onClick={() => navigate('/login')}>
        Login
      </button>
      <button
        onClick={() => navigate('/playerStats')}>
        Player Stats
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/newsAndUpdates" element={<NewsAndUpdatesPage />} />
        <Route path="/playerStats" element={<PlayerStatsPage />} />
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
