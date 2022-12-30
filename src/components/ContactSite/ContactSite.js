import React, { Component } from 'react'


export default class ContactSite extends Component {
  render() {
    return (
      <>
    <div class="jumbotron text-center">
            <h1 class="jumbotron-heading">Skontaktuj się z nami</h1>
            <p class="lead text-muted mb-0">Możesz zadzwonić, napisać krótkiego maila bądź złożyć wizytę w naszym biurze<br/> Czekamy własnie na ciebie !</p>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header bg-dark text-white"><i class="fa fa-envelope"></i> Formularz kontaktowy</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Imie</label>
                                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Twoje imie:" required/>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Twój email" required/>
                            </div>

                            <div class="form-group">
                                <label for="message">Treść wiadomość:</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                                <small id="emailHelp" class="form-text text-muted">Pamiętaj, że twój email zostanie dodany do bazy klientów co oznacza możliwość zasypywania twojej poczty naszym firmowym syfem i wiadomościami</small>
                            </div>
                            
                            <div class="mx-auto"><button type="submit" class="btn btn-dark text-right">Wyślij</button></div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-4">
                <div class="card bg-light mb-3">
                    <div class="card-header bg-dark text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                    <div class="card-body">
                        <p>Ulica jakiś komunistów jebanych 3/7</p>
                        <p>25‑002 Kielce</p>
                        <p>Polska</p>
                        <p>Email : marnujemy@tlen.pl</p>
                        <p>Tel. +43 066 011 186 65</p>

                    </div>

                </div>
            </div>
        </div>
    </div>


      </>
    )
  }
}
