import React, { Component } from 'react'


import pic1 from "./car1.jpg"


import './AuctionShow.css';

export function Panel(zgloszenie) {
    return (
        <div class="col">
        <div class="card shadow-sm">
        <img src={zgloszenie.zdj} alt="img" class=" d-block w-100"/>
          <div class="card-body bg-black text-white">
            <p class="card-text">{zgloszenie.opis}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary text-white">Zobacz</button>
                <button type="button" class="btn btn-sm btn-outline-secondary text-white">{zgloszenie.cena}</button>
              </div>
              <small class="text-muted">{zgloszenie.dataDodania}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default class AuctionShow extends Component {
  render() {
    return (
        <>


            {/**Jakis tam naglowek**/}
            <div class="gradient-col">
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
            <div class="navbar navbar-dark bg-dark">
                <div class="container">
                <div class="navbar-brand d-flex align-items-center">Aktualność</div>
                <div class="text-white"> Tu dodać funkcyjność</div>
                <div class="text-white"> Jakieś wyszukiwanie</div>
                <div class="text-white"> Filtrowanie</div>
                <div class="text-white"> Po cenie itd</div>
                <div class="text-white"> Parametry dodatkowe</div>
                </div>
            </div>

            {/**Galeria**/}
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Panel opis="jakis tam opis, auto 1" zdj={pic1} dataDodania="20 min" cena="20 000zł"/>
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
                        <Panel opis="jakis tam opis, auto 12" zdj={pic1} dataDodania="5 min"  cena="2 110 000zł"/>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
