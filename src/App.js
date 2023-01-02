import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slidder from './components/Slidder/Slidder';
import ContactSite from './components/ContactSite/ContactSite';
import Footer from './components/Footer/Footer';
import Accomplishment from './components/Accomplishment/Accomplishment';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import MottoComp from './components/MottoComp/MottoComp';
import AuctionShow from './components/AuctionShow/AuctionShow';




import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

          <Routes>
            
            <Route path="/" element={<> <Slidder/> <MottoComp/> <Accomplishment /> </>}/>

            
            <Route path="/Kontakt" element={<ContactSite/>}/>
            <Route path="/Aukcje" element={<AuctionShow/>}/>


            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>


          </Routes>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
