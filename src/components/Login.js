import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = (props) => {
    const [idPass,setIdPass]=useState({
        username:"",
        password:""
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUserHandler(idPass);
  };
  console.log("login",props.user);
const handleChange=(e)=>{
    e.preventDefault();
    let {name,value}=e.target;
    setIdPass({...idPass,[name]:value});


}

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={idPass.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={idPass.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
