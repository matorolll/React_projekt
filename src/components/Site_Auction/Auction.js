import React, { Component } from 'react'
import {Data} from './data'



import './Auction.css';



export default class AuctionShow extends Component {


  render() {
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
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="option1">Benzyna</label>
                    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="option2">Dieles</label>
                    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="option3">Hybryda</label>
                    <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="option4">Elektryczny</label>
                    <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
                    <label class="btn btn-outline-primary" for="option5">Konie</label>
                  </div>

                  <div class="col-xs-8 col-xs-offset-2">
                    <div class="input-group ">

                      {/** filtry */}
                      <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"  aria-expanded="false">Filtruj<span class="caret"></span></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="cos">Od najtańszych</a></li>
                          <li><a class="dropdown-item" href="cos">Od najdroższych</a></li>
                          <li><a class="dropdown-item" href="cos">Od najbardziej popularnych</a></li>
                          <li><a class="dropdown-item" href="cos">Od najmniej popularnych</a></li>
                        </ul>
                      </div>

                      {/** wyszukiwanie */}
                      <input type="search" class="form-control rounded" placeholder="Szukaj" aria-label="Search" aria-describedby="search-addon" />
                      <button type="button" class="btn btn-outline-primary">Szukaj</button>

                    </div>
                  </div>

                </div>
            </div>

            {/**Galeria**/}
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                       { /** <Panel opis="jakis tam opis, auto 1" zdj={pic1} dataDodania="20 min" cena="20 000zł"/>
                        <Panel opis="jakis tam opis, auto 2" zdj={pic1} dataDodania="5 min"  cena="30 000zł"/>
                        <Panel opis="jakis tam opis, auto 3" zdj={pic1} dataDodania="5 min"  cena="40 000zł"/>
                        <Panel opis="jakis tam opis, auto 4" zdj={pic1} dataDodania="5 min"  cena="50 000zł"/>
                        <Panel opis="jakis tam opis, auto 5" zdj={pic1} dataDodania="5 min"  cena="60 000zł"/>
                        <Panel opis="jakis tam opis, auto 6" zdj={pic1} dataDodania="5 min"  cena="70 000zł"/>
                        <Panel opis="jakis tam opis, auto 7" zdj={pic1} dataDodania="5 min"  cena="80 000zł"/>
                        <Panel opis="jakis tam opis, auto 8" zdj={pic1} dataDodania="5 min"  cena="90 000zł"/>
                        <Panel opis="jakis tam opis, auto 9" zdj={pic1} dataDodania="5 min"  cena="200 000zł"/>
                        <Panel opis="jakis tam opis, auto 10" zdj={pic1} dataDodania="5 min"  cena="2 340 000zł"/>
                        <Panel opis="jakis tam opis, auto 11" zdj={pic1} dataDodania="5 min"  cena="2 210 000zł"/>
    <Panel opis="jakis tam opis, auto 12" zdj={pic1} dataDodania="5 min"  cena="2 110 000zł"/> **/}


{/**Data.map((zgloszenie) => ( **/}


                        {Data.map((zgloszenie) => (
                                  <div class="col" key={zgloszenie.id}>
                                  <div class="card shadow-sm ">
                                  <img src={zgloszenie.zdj} alt="img" class=" d-block w-100"/>
                                    <div class="card-body bg-black text-white">
                                      <p class="card-text">{zgloszenie.opis}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-sm btn-outline-secondary text-white">Zobacz</button>
                                          <button type="button" class="btn btn-sm btn-outline-secondary text-white disabled">{zgloszenie.cena}</button>
                                        </div>
                                        <small class="text-muted">{zgloszenie.dataDodania}</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

        
    )
  }
}
