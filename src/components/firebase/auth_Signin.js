import React, {useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth } from "./firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { Container } from "react-bootstrap";


const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    });

  }
  
  return (

<Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <div className="w-100" style={{maxWidth: "400px"}}>
    <Card>
      <Card.Body>
        <h2 className = "text-center mb-4">Zaloguj się</h2>
        <Form onSubmit={signin}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </Form.Group>

          <Form.Group id="password">
            <Form.Label className="mt-2">Hasło</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
          </Form.Group>

          <Button className="w-100 mt-3" type="submit">
            Zaloguj się
          </Button>
        </Form>
        
      </Card.Body>
      
    </Card>
    <div className = "w-100 text-center mt-2">
      Nie masz jeszcze konta? <a href="/signup">Zarejestruj się</a>
    </div>

    </div>
    </Container>

  )
}

export default Signin