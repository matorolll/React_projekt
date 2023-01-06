import React, {useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth } from "./firebase"
import { createUserWithEmailAndPassword} from "firebase/auth"
import { Container } from "react-bootstrap";


const Signup = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    });

  }

  return (
<>
<Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <div className="w-100" style={{maxWidth: "400px"}}>

    <Card>
      <Card.Body>
        <h2 className = "text-center mb-4">Zarejestruj się</h2>
        <Form onSubmit = {signup}>
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
            Zarejestruj się
          </Button>
        </Form>
        
      </Card.Body>
      
    </Card>
    <div className = "w-100 text-center mt-2">
      Masz już konto? <a href="/signin">Zaloguj się</a>
    </div>
          </div>
        </Container> 
</>
    )
}

export default Signup