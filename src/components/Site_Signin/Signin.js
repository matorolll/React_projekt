import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
        <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="bg-dark text-white card shadow-2-strong card-registration">  
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Zaloguj się</h3>
                  <form>
                      <div class="mb-4">
                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg" />
                          <label class="form-label" for="firstName">E-mail</label>
                        </div>
                      </div>

                      <div class="mb-4">
                        <div class="form-outline">
                          <input type="text" id="lastName" class="form-control form-control-lg" />
                          <label class="form-label" for="lastName">Hasło</label>
                        </div>
                      </div>
      
                    <div class="mt-4 pt-2"><input class="btn btn-dark btn-lg" type="submit" value="Logowanie" /></div>
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
