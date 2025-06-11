
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Home'
import Header from './components/header/Header'
import MovieDetail from './components/movieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:imdbId" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
