import React, { Component } from 'react'

import './Slidder.css';


export default class Slidder extends Component {
  render() {
    return (
    <div>
        <div class = "carousel-item active">
            <div class="carousel-container">
                <h1>Prostota wyszukiwania</h1>
                <p> Znajdź interesujące oferty w twojej okolicy</p>
                <a href ="#" class="btn btn-lg btn-primary">Sprawdź</a>


            </div>
        </div>
    </div>
    )
  }
}

