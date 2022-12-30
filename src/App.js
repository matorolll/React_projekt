import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slidder from './components/Slidder/Slidder';
import ContactSite from './components/ContactSite/ContactSite';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="/"/>
            <Route path="/Glowna" element={<Slidder/>}/>
            <Route path="/Kontakt" element={<ContactSite/>}/>


          </Routes>
      </div>

    </Router>

  );
}

export default App;
