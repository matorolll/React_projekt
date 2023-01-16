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


import { db                  } from './components/firebase/firebase';
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"


function App() {


 
 const [aukcje, setAukcje] = useState([]);
  const aukcjeCollectionRef = collection(db, "aukcje");

  useEffect(() => {
    const getAukcje = async() => {
      const data = await getDocs(aukcjeCollectionRef)
      setAukcje(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getAukcje();
    // eslint-disable-next-line 
  }, []); 
  
  


  return (
  <>  {
              <div>
                Blok do testowania firebase

                {aukcje.map((aukcja) =>{
                  return(
                  <div>
                      <h1>Nazwa: {aukcja.nazwa}</h1>
                      <h1>Nazwa: {aukcja.cena}</h1>
                    </div>
                  );
                })}
                koniec bloku do testowania firebase
              </div> 
       }

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

  </Router></>
  );
}
export default App;
//matorol@gmail.com
//haslo123