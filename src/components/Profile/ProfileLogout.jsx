import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";

const ProfileLogout = () => {
  const { setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  return <button onClick={handleLogoutClick}>Logout</button>;
};
export default ProfileLogout;
