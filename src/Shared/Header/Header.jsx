import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/CategoriesContext";

const Header = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Extreme News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-decoration-none link-secondary" to="/">Home</Link>
            <Link className="text-decoration-none link-secondary" to="/">Pricing</Link>
            <NavDropdown
              title="Categories"
              id="collapsible-nav-dropdown"
            >
              {categories.map((category) => (
                <NavDropdown.Item key={category.id}>
                  <NavLink className="text-decoration-none link-secondary" to={`/category/${category.id}`}>
                    {category.name}
                  </NavLink>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
