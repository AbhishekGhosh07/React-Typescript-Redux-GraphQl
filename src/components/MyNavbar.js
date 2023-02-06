import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown,} from "react-bootstrap";

const MyNavbar = (props) => {
  console.log("Nabar",props.user);
  return (<>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">EKART</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Education</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Career Overview</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Certifications</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Skills</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Competitions</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Languages Known</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
     
        <br/>
        {
            (props.user.length!==0)? <Navbar.Brand href="/">{props.user[0].users.username}</Navbar.Brand>:null
          }
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </>
  );
};

export default MyNavbar;
