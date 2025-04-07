

import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { SingleMovie } from './components/single-movie'
import { TopRated } from './components/top-rated'
import { UpcommingMovie } from './components/upcomming'

function App() {


  return (
    <div className='text-gray-200'>
      <BrowserRouter>
      <header className="flex justify-between items-center p-4 bg-gray-900">
          <h2 className="text-2xl font-bold">MovieDb</h2>
          <div className="flex items-center gap-6">
            <nav className="flex gap-4">
              <Link to="/">Popular</Link>
              <Link to="/top-rated">Top Rated</Link>
              <Link to="/upcomming">Upcoming</Link>
              <Link to="/singlemovie">Single Movie</Link>
            </nav>
            <div className="flex">
              <input
                type="text"
                className="rounded-l bg-gray-200 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-sm focus:border-lime-200"
              />
              <button className="bg-lime-500 px-4 text-white font-bold rounded-r hover:bg-lime-600 hover:shadow-lg transition duration-150 ease-in-out">
                Search
              </button>
            </div>
          </div>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-rated' element={<TopRated />} />
            <Route path='/upcomming' element={<UpcommingMovie />} />
            <Route path='/singlemovie' element={<SingleMovie />} />


          </Routes>
        </section>
      </BrowserRouter>

    </div>
  )
}

export default App
