import './App.css';
import Home from './components/Home/Home';
import Header from './components/header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFoundPage/NotFound.tsx';
import ShowHomeScreen from './components/show/homeScreen/ShowHomeScreen.tsx';
import ComingSoon from './components/comingSoon/ComingSoon.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/theater-scripts" element={<ComingSoon />} />
        <Route path="/theater-scripts/:id" element={<ComingSoon />} />
        <Route path="/shows" element={<ShowHomeScreen />} />
        <Route path="/shows/:id" element={<ComingSoon />} />
        <Route path="/theaters" element={<ComingSoon />} />
        <Route path="/theaters/:id" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
