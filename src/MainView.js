import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landingpage/7ayfm-home';
import BetaPage from './components/pages/beta_access/beta-page';
import AboutUs from './components/pages/nosotrospage/about_us';
import Colleges from './components/pages/colleges/colleges';
import Howto from './components/pages/functions/how_works';
import Business from './components/pages/business/business';
import Updates from './components/pages/updates/updates';
import Frecuently from './components/pages/faq/faq';
import Confirm from './components/pages/confirm/confirm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beta" element={<BetaPage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path='how-to'  element={<Howto />} />
          <Route path="/college" element={<Colleges />} />
          <Route path="/business" element={<Business />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/faq" element={<Frecuently />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
