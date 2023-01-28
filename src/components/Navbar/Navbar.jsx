import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import ProfileLogout from "../Profile/ProfileLogout";

const NavBar = () => {
  const { user } = useUser();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand mx-5">
          <img
            alt=""
            src="/img/Logo.png"
            width="30"
            height="30"
            className="align-top"
          />{" "}
          Lost in Translation
        </Navbar.Brand>
        <Container className="container-fluid">
          {user !== null && (
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/translate">
                Translate
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            </Nav>
          )}
        </Container>
        {user !== null && (
          <div className="me-3">
            <ProfileLogout></ProfileLogout>
          </div>
        )}
      </Navbar>
    </>
  );
};
export default NavBar;
