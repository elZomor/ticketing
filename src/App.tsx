import './App.css';
import Home from './components/Home/Home';
import Header from './components/header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About.tsx';
import NotFound from './components/notFoundPage/NotFound.tsx';
import ShowsViewAll from './components/shows/ShowsViewAll.tsx';
import TheaterScriptsViewAll from './components/theaterScripts/TheaterScriptsViewAll.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theater-scripts" element={<TheaterScriptsViewAll />} />
        <Route path="/shows" element={<ShowsViewAll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
