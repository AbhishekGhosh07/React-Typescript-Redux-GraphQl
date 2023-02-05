import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = (props) => {
  console.log("LOGIN FORM PAGE" ,props.cred);
  const [cred,setCred] = useState({
    username:" ",
    password:" "
  })

  

  
  const handleChange =(e)=>{
      e.preventDefault();
      let {name,value} = e.target;
      setCred({...cred,[name]:value})    
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={cred.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={cred.password}
                onChange={handleChange}
              />
            </Form.Group>
            <button onClick={()=>props.addToUsernameHandler({name:"iphone 13"})}>Submit</button>
              
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
