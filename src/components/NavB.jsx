import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavB = () => {
  return (
    <Navbar className="bg-inherit" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="The One App"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          the_ONE_app
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end text-xl">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login">
              <span className="text-white">Nikhil Silas</span>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
