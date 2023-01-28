import React from 'react'

import { db                  } from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect} from "react"

import './Auction.css';



function AuctionShow() {

  const [aukcje, setAukcje] = useState([]);
  const [filteredAukcje, setFilteredAukcje] = useState([]);
  const aukcjeCollectionRef = collection(db, "aukcje");

  

  useEffect(() => {
    const getAukcje = async() => {
      const data = await getDocs(aukcjeCollectionRef)
      setAukcje(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredAukcje(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getAukcje();
    // eslint-disable-next-line 
  }, []); 
  

  const filterAukcje = (naped) => { setFilteredAukcje(aukcje.filter((aukcja) => aukcja.naped === naped)); };

  const sortAukcje = (typsortu) => { setFilteredAukcje(aukcje.sort((a, b) => {
      if(typsortu === "asc") return a.cena - b.cena
      else if(typsortu === "desc") return b.cena - a.cena
      else if(typsortu === "ascPOP") return a.id - b.id
      else if(typsortu === "descPOP") return b.id - a.id
    }));};

  const resetFilter = () => { setFilteredAukcje(aukcje); }

  const searchFilter = (search) => { setFilteredAukcje(aukcje.filter((aukcja) => aukcja.nazwa.toLowerCase().includes(search.toLowerCase())));};
  



  
    return (
        <>
            {/**Jakis tam naglowek**/}
            <div class="gradient-col" >
                <div class="py-5 text-center container ">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="text-muted">Każdy znajdzie coś dla siebie</h1>
                            <p class="lead text-muted">Wyszukaj, porównaj, wykup, sprawdź, zadzwoń - wszystko w jednym miejscu z funkcjami wyszukiwania treść</p>
                        </div>
                    </div>
                </div>
            </div>

            {/**Pole z parametrami**/}
            <div class="navbar navbar-dark bg-dark  border-bottom ">
                <div class="container">
                  <div class="navbar-brand d-flex align-items-center">Aktualność</div>

                  {/** Opcje */}
                  <div>
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" onClick={() => filterAukcje("benzyna")}/>
                    <label class="btn btn-outline-primary" for="option1">Benzyna</label>
                    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" onClick={() => filterAukcje("diesel")}/>
                    <label class="btn btn-outline-primary" for="option2">Diesel</label>
                    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" onClick={() => filterAukcje("hybryda")}/>
                    <label class="btn btn-outline-primary" for="option3">Hybryda</label>
                    <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" onClick={() => filterAukcje("elektryczny")}/>
                    <label class="btn btn-outline-primary" for="option4">Elektryczny</label>
                    <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" onClick={() => filterAukcje("konie")}/>
                    <label class="btn btn-outline-primary" for="option5">Konie</label>
                    <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" onClick={() => resetFilter()}/>
                    <label class="btn btn-outline-primary" for="option6">Odznacz</label>
                  </div>

                  <div class="col-xs-8 col-xs-offset-2">
                    <div class="input-group ">

                      {/** filtry */}
                      <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"  aria-expanded="false">Filtruj<span class="caret"></span></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item"  onClick={() => sortAukcje('asc')}    >Od najtańszych</a></li>
                          <li><a class="dropdown-item"  onClick={() => sortAukcje('desc')}   >Od najdroższych</a></li>
                          <li><a class="dropdown-item"  onClick={() => sortAukcje('ascPOP')} >Od najbardziej popularnych</a></li>
                          <li><a class="dropdown-item"  onClick={() => sortAukcje('descPOP')}>Od najmniej popularnych</a></li>
                        </ul>
                      </div>

                      {/** wyszukiwanie */}
                      <input type="search" class="form-control rounded" placeholder="Szukaj" aria-label="Search" aria-describedby="search-addon" onChange={(e) => searchFilter(e.target.value)} />
                      <button type="button" class="btn btn-outline-primary">Szukaj</button>

                    </div>
                  </div>

                </div>
            </div>

            {/**Galeria**/}
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

{filteredAukcje.map((aukcja) =>(
  <div  class="col" key={aukcja.id}>
    <div class="card shadow-sm ">
      <img src={aukcja.zdj} alt="img" class=" d-block w-100"/>
      <div class="card-body bg-black text-white">
        <p class="card-text">{aukcja.nazwa}</p>
        <p class="card-text">{aukcja.opis}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary text-white">Zobacz</button>
            <button type="button" class="btn btn-sm btn-outline-secondary text-white disabled">{aukcja.cena}zł</button>
          </div>
          <small class="text-muted">Dodano:  {aukcja.dataDodania}</small>
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
export default AuctionShow;
