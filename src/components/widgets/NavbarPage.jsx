import React, { Component } from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
class NavbarPage extends Component {

render() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Bettur-Dj</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/social">Social</Nav.Link>
          <Nav.Link href="/playlists">Playlists</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search Spotify" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      </div>
    );
  }
}

export default NavbarPage;