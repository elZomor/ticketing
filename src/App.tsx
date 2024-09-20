import './App.css';
import Home from './components/Home/Home';
import Header from './components/header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFoundPage/NotFound.tsx';
import ShowHomeScreen from './components/show/homeScreen/ShowHomeScreen.tsx';
import ComingSoon from './components/comingSoon/ComingSoon.tsx';
import seats12 from './assets/images/seats12.avif';

function App() {
  return (
    <div className="w-screen h-screen relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
      <img
        src={seats12}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
      />
      <Header />
      <div className="z-40 h-full w-full overflow-y-scroll pt-16">
        <div className="h-full w-full flex-1 flex items-center justify-center bg-cover bg-center bg-no-repeat">
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
        </div>
      </div>
    </div>
  );
}

export default App;
