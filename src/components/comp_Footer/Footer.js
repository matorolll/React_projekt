import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    return (
        <footer class="text-center text-lg-start bg-dark text-white">

          <section class="d-flex justify-content-center p-4 border-bottom">
            <div class="me-4 d-none d-lg-block"><span>Poznaj nas od innej strony:</span></div>
            <div>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-facebook-f"></i></a>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-twitter"></i></a>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-google"></i></a>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-instagram"></i></a>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-linkedin"></i></a>
              <a href="#!" class="me-4 link-secondary"><i class="fab fa-github"></i></a>
            </div>
          </section>
     
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3 text-secondary"></i>Tak to my</h6>
                  <p class="text-justify"> Jesteśmy polskimi profesjonalistami wykonywujących swój fach już ponad 600 lat. 
                      Sprawdź nasze osiągnięcia na pozostałych mediach społecznościowych</p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    Sprawdź nasze inne projekty
                  </h6>
                  <p><a href="#!" class="text-reset">AsasinSkrad.pl</a></p>
                  <p><a href="#!" class="text-reset">70milionowZe.com</a></p>
                  <p><a href="#!" class="text-reset">Skarbupanstwa.uk</a></p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4"> Przydatne zakładki </h6>
                  <p><a href="#!" class="text-reset">Ustawienia</a></p>
                  <p><a href="#!" class="text-reset">Jak przeżyć w polsce za minimalną</a></p>
                  <p> <a href="#!" class="text-reset">Wycena</a> </p>
                </div>
  
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
                  <p><i class="fas fa-home me-3 text-secondary"></i> Rondo im. Papajaka, 33-001, Kielce</p>
                  <p><i class="fas fa-envelope me-3 text-secondary"></i>marnujemy@tlen.pl</p>
                  <p><i class="fas fa-phone me-3 text-secondary"></i> + 43 066 011 186 65</p>
                  <p><i class="fas fa-print me-3 text-secondary"></i> + 01 177 013 123 45</p>
                </div>
              </div>
            </div>
          </section>
          <div class="text-center p-4"> © 2022 albo 2023 Copyright by: <a class="text-reset fw-bold" href="https://jbzd.com.pl/">EkipaPilnujacaWiaderka</a></div>
          
        </footer>

    )
  }
}
