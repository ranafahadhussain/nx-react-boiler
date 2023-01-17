import { styled } from '@tote/ui';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  return (
    <StyledHeader>
      <Navbar variant={'light'} expand="lg" fixed="top" className="navbar">
        <Navbar.Brand href="#">TOTE</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              TOTE
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <Nav className="links">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </StyledHeader>
  );
}

const StyledHeader = styled('div', {
  '.navbar': {
    color: '$bgColor',
    padding: '10px',
    backgroundColor: '$primaryBg',
  },

  '.links': {
    width: '500px',
    justifyContent: 'center',
  },
});
