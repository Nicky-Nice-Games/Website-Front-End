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

/* function NavBar() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row w-full bg-[#F76902] justify-between'>
      <button
        onClick={() => navigate('/home')}
      >
        <img src="images/landscape-placeholder.svg" className='max-w-10'/>
      </button>
      <div>
        <button
          className='p-2'
          onClick={() => navigate('/about')}>
          About
        </button>
        <button
          className='p-2'
          onClick={() => navigate('/content')}>
          Content
        </button>
        <button
          className='p-2'
          onClick={() => navigate('/newsAndUpdates')}>
          News & Updates
        </button>
        <button
          className='p-2'
          onClick={() => navigate('/forum')}>
          Community
        </button>
      </div>
      <button
      className='justify-end'
      onClick={() => navigate('/playerStats')}
      >
        Username
      </button>

      <button
        onClick={() => navigate('/content')}>
        Content
      </button>
    </div>
  );
} */

function App() {
  return (
    <Router>
      <Navbar />
      <div className='min-h-190'>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/news" element={<NewsAndUpdatesPage />} />
        <Route path="/stats" element={<PlayerStatsPage />} />
        <Route path="/forumPost" element={<ForumPost />} />
        <Route path="/content/characters" element={<CharactersPage />} />
        <Route path="/content/tracks" element={<TracksPage />} />
        <Route path="/content/items" element={<ItemsPage />} />
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </Router>
  
  );
}

  

export default App;
