import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/home';
import { TopRated } from './components/top-rated';
import { UpcomingMovie } from './components/upcomming';
import { MovieDetail } from './components/single-movie';
import { SearchResults } from './components/searchResult';

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMenuOpen(false); // close menu on mobile after search
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className='text-gray-200'>
      <header className="bg-gray-900 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">MovieDb</h2>
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Navigation menu */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:justify-between mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <nav className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
            <Link to="/" onClick={() => setMenuOpen(false)}>Popular</Link>
            <Link to="/top-rated" onClick={() => setMenuOpen(false)}>Top Rated</Link>
            <Link to="/upcoming" onClick={() => setMenuOpen(false)}>Upcoming</Link>
          </nav>

          <div className="flex w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="rounded-l bg-gray-200 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-sm focus:border-lime-200"
            />
            <button
              onClick={handleSearch}
              className="bg-lime-500 px-4 text-white font-bold rounded-r hover:bg-lime-600 hover:shadow-lg transition duration-150 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/upcoming' element={<UpcomingMovie />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </section>
    </div>
  );
}

export default AppWrapper;
