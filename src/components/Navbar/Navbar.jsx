import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav>
      <ul>
        <li>Translation</li>
      </ul>

      {user !== null && (
        <ul>
          <li>
            <NavLink to="/translate">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
