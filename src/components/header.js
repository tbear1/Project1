import React, {Link} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {GiSmokingFinger} from 'react-icons/gi';


function Header() {

    return(
      
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/paginate">Paginate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;