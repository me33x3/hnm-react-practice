import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button }  from 'react-bootstrap'

const Login = ({ setAuthenticate }) => {
  let navigate = useNavigate()

  const login = (event) => {
    event.preventDefault()
    setAuthenticate(true)
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={(event) => login(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
