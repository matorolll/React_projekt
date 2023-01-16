import React, {useState} from 'react'
import { auth } from "../firebase/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"


const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      window.location.href="/";
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    });

  }
  
  return (
        <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="bg-dark text-white card shadow-2-strong card-registration">  
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Zaloguj się</h3>
                  <form onSubmit={signin}>
                      <div class="mb-4">
                        <div class="form-outline">
                          <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required id="firstName" class="form-control form-control-lg" />
                          <label class="form-label" for="firstName">E-mail</label>
                        </div>
                      </div>

                      <div class="mb-4">
                        <div class="form-outline">
                          <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required id="lastName" class="form-control form-control-lg" />
                          <label class="form-label" for="lastName">Hasło</label>
                        </div>
                      </div>
                      <div class="mt-4 pt-2"><input class="btn btn-dark btn-lg" type="submit" value="Logowanie" /></div>
                  </form>
                </div>
              </div> 
               <div className = "w-100 text-center text-white mt-2"> Nie masz jeszcze konta? <a href="/signup">Zarejestruj się</a></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default Signin