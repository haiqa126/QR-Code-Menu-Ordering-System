import React from "react";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    if (event.target[0].value === "" && event.target[1].value === "") {
      alert("Please fill in username and password");
    }

    if (event.target[0].value !== "" && event.target[1].value === "") {
      alert("Please fill in password");
    }

    if (event.target[0].value === "" && event.target[1].value !== "") {
      alert("Please fill in username");
    }
  }
  return (
    <>
      <Container className="Loginpage">
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <label>
                username
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                ></input>
              </label>

              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </label>

              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
