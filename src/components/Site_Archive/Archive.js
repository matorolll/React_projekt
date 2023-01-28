import React from 'react'
import { db                  } from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect} from "react"
import './Archive.css';

function Archive() {

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
        <>
            {/**Jakis tam naglowek**/}
            <div class="gradient-col" >
                <div class="py-5 text-center container ">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="text-muted">Przedmioty już nieaktualne</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/**Galeria**/}
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

{aukcje.map((aukcja) =>(
  <div  class="col" key={aukcja.id}>
    <div class="card shadow-sm ">
      <img src={aukcja.zdj} alt="img" class=" d-block w-100"/>
      <div class="card-body bg-black text-white">
        <p class="card-text">{aukcja.nazwa}</p>
        <p class="card-text">{aukcja.opis}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary text-white">Zobacz</button>
            <button type="button" class="btn btn-sm btn-outline-secondary text-white disabled">Sprzedany</button>
          </div>
          <small class="text-muted">Dodano:   {aukcja.dataDodania}</small>
        </div>
      </div>
    </div>
  </div>

))}


                    </div>
                </div>
            </div>
        </>

        
    );
}
export default Archive;
