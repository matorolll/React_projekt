import React, { Component } from 'react'

import './Signup.css';


export default class Signup extends Component {
  render() {
    return (
        <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="bg-dark text-white card shadow-2-strong card-registration">  
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Zarejestruj się</h3>
                  <form>
      
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg" />
                          <label class="form-label" for="firstName">Imie</label>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="lastName" class="form-control form-control-lg" />
                          <label class="form-label" for="lastName">Nazwisko</label>
                        </div>
                      </div>
                    </div>
      

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <input type="password" class="form-control form-control-lg" id="passwordDate" />
                          <label for="passwordDate" class="form-label">Hasło</label>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <h6 class="mb-2 pb-1">Płeć: </h6>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option1" checked />
                          <label class="form-check-label" for="femaleGender">Mężczyzna</label>
                        </div>
      
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option2" />
                          <label class="form-check-label" for="maleGender">Kobieta</label>
                        </div>
      
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"value="option3" />
                          <label class="form-check-label" for="otherGender">Upośledzenie</label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"value="option4" />
                          <label class="form-check-label" for="otherGender">Helikopter</label>
                        </div>
                      </div>
                    </div>
      
                    <div class="row">

                        
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input type="password" id="password2" class="form-control form-control-lg" />
                          <label class="form-label" for="password">Powtórz Hasło</label>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input type="email" id="emailAddress" class="form-control form-control-lg" />
                          <label class="form-label" for="emailAddress">E-mail</label>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 pt-2"><input class="btn btn-dark btn-lg" type="submit" value="Rejestruj" /></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
