// import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import Banner from './Banner';
import Music from './Music.js';
import Footer from './Footer.js';
import Headerleft from './Header_left';
import Headerleftbtm from './Header_left_btm.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shubh from './Shubh';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Showall from './Showall';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Header_banner'>

          <Header />
          <Music />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shubh' element={<Shubh />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Showall' element={<Showall />} />
          </Routes>
          <Footer />
        </div>
        {/* left side */}
        <div className='all_left_side'>
          <div className='Header_banner_left'>
            <Headerleft />
          </div>
          <div className='Header_banner_left_btm'>
            <Headerleftbtm />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
