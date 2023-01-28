import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

/**
 * Navigates to home page if the user is not logged in (protecting the target Component).
 * @param {*} Component
 * @returns Component
 */
const withAuth = (Component) => (props) => {
  const { user } = useUser();
  if (user !== null) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};
export default withAuth;
