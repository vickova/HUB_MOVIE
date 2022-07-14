import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import PopularDetails from './pages/PopularDetails';
import Trending from './pages/Trending';
import TrendingDetails from './pages/TrendingDetails';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Popular from './pages/Popular';


function App() {
  const [detailsId, setDetailsId] = useState();
  const [trendingId, setTrendingId] = useState();
  const [backG, setBackG] = useState(false);
  return (
    <div className="App" style={{backgroundColor: backG? 'rgb(36, 35, 35)': '#FFF'}}>
      <BrowserRouter>
      <Navbar backG={backG} setBackG={setBackG}/>
        <Routes>
            <Route path='/' element={<Popular detailsId={detailsId} setDetailsId={setDetailsId}/>} exact />
            <Route path='/trending' element={<Trending trendingId={trendingId} setTrendingId={setTrendingId}/>} exact/>
            <Route path='/trending/details' element={<TrendingDetails trendingId={trendingId} setTrendingId={setTrendingId}/>} exact/>
            <Route path='/popular/details' element={<PopularDetails detailsId={detailsId} setDetailsId={setDetailsId}/>} exact/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
