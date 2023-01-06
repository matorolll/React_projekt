import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/comp_Navbar/Navbar';
import Slidder from './components/comp_Slidder/Slidder';
import Motto from './components/comp_Motto/Motto';
import Accomplishment from './components/comp_Accomplishment/Accomplishment';
import Footer from './components/comp_Footer/Footer';

import ContactSite from './components/Site_Contact/Contact';
import SigninSite from './components/Site_Signin/Signin';
import SignupSite from './components/Site_Signup/Signup';
import AuctionSite from './components/Site_Auction/Auction';

function App() {
  return (
    <Router>

        <Navbar/>  
        <Routes>   

        <Route path="/" element={<> <Slidder/> <Motto/> <Accomplishment/> </>}/> 
        <Route path="/Kontakt" element={<ContactSite/>}/>
        <Route path="/Aukcje" element={<AuctionSite/>}/>
        <Route path="/Signin" element={<SigninSite/>}/>
        <Route path="/Signup" element={<SignupSite/>}/>

        </Routes>
        <Footer/>

  </Router>
  );
}
export default App;
