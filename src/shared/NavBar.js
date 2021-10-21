import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { InputSearch } from "./InputSearch";

export const NavBar = () => {
  return (
    <Navbar bg="dark bg-gradient" variant="dark" expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="/">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Filter by rating"
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <Dropdown.Divider />
              <NavDropdown.Item>Default</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <InputSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
