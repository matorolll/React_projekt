import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import car1 from './car1.webp';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import car4 from './car4.jpg';
import car5 from './car5.jpg';
import car6 from './car6.jpg';
import car7 from './car7.jpg';

import './Slidder.css';


export default class Slidder extends Component {
  render() {
    return (
      <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={car1} alt="img"/>
        <Carousel.Caption> <h3>Dynamika</h3> <p>nasze samochody zapewnią Ci niezapomniane wrażenia z jazdy.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car2} alt="img"/>
        <Carousel.Caption> <h3>Ekskluzywność</h3><p>luksusowa jakość naszych samochodów to coś, co docenisz podczas każdej podróży.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car3} alt="img"/>
        <Carousel.Caption><h3>Nowoczesność</h3> <p> nasze samochody są wyposażone w najnowsze technologie, dzięki czemu jazda staje się jeszcze przyjemniejsza.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car4} alt="img"/>
        <Carousel.Caption><h3>Lekkość</h3> <p> nasze samochody to doskonały wybór dla tych, którzy cenią sobie szybkość i zwinność na miejskich drogach.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car5} alt="img"/>
        <Carousel.Caption><h3>Bezpieczeństwo</h3> <p> nasze samochody są projektowane z myślą o Twoim bezpieczeństwie i komforcie.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car6} alt="img"/>
        <Carousel.Caption><h3>Ekologia</h3> <p> dbaj o środowisko, wybierając nasze samochody, które charakteryzują się niskim zużyciem paliwa i emisją spalin.</p></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car7} alt="img"/>
        <Carousel.Caption><h3>Komfort</h3> <p> codzienna podróż staje się przyjemnością dzięki naszym wygodnym i komfortowym samochodom.</p></Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    )
  }
}

