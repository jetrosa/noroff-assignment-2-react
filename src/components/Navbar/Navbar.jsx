import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import ProfileLogout from "../Profile/ProfileLogout";

const NavBar = () => {
  const { user } = useUser();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/img/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Lost in Translation
          </Navbar.Brand>
          {user !== null && (
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/translate">
                Translate
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
              <ProfileLogout></ProfileLogout>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
