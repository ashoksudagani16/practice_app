import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent() {

  const menus = [
    {
      name: "Resume",
      path: "/resume",
      disable: true
    },
    {
      name: "About",
      path: "/about",
      disable: true
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      disable: false
    },
    {
      name: "Contact",
      path: "/contact",
      disable: false
    }
  ]
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ashok</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {
              menus.map((v) => {
                return (
                  <Nav.Link href={v.path} className="me-5" disabled={v.disable}>{v.name}</Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;