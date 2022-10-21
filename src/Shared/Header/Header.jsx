import { useContext, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import { CategoriesContext } from "../../Contexts/CategoriesContext";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { categories } = useContext(CategoriesContext);
  const { user, logOut } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="mb-4"
      bg="light"
      sticky="top"
      style={{ zIndex: "1030" }}
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none link-secondary" to="/">
            Extreme News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mt-3 mt-lg-0 d-lg-flex gap-3 align-items-lg-center">
            <Link className="text-decoration-none link-secondary" to="/">
              Home
            </Link>
            <Link className="text-decoration-none link-secondary" to="/">
              Pricing
            </Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item key={category.id} as="span">
                  <Link
                    className="text-decoration-none link-secondary"
                    to={`/category/${category.id}`}
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="ms-3">
          <div>
            <div
              ref={ref}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                background: "lightgray",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
              onClick={handleClick}
            >
              {user?.photoURL ? (
                <Image
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                  src={user?.photoURL}
                  roundedCircle
                />
              ) : (
                <div>
                  <FaUser />
                </div>
              )}
            </div>

            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Header as="h5">{user?.email}</Popover.Header>
                <Popover.Body className="bg-light">
                  {user ? (
                    <>
                      <strong>{user?.displayName}</strong>
                      <br />
                      <Link to="/profile">
                        <Button className="w-100 mt-1">Profile</Button>
                      </Link>
                      <Button
                        className="w-100 mt-1 py-1"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button className="w-100 mb-2">Login</Button>
                      </Link>
                      <br />
                      <Link to="/register">
                        <Button className="w-100">Register</Button>
                      </Link>
                    </>
                  )}
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
