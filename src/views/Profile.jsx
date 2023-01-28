import "./profile.css";
import { useEffect } from "react";
import { findUserById } from "../api/user";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../auth/withAuth";
import { storageSave } from "../utils/storage";

const Profile = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await findUserById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };
    findUser();
  }, [setUser, user.id]);

  return (
    <>
      <div id="profile-header-bg" className="row d-flex justify-content-center">
        <div className="col-7 mt-2">
          <h1>Profile</h1>
          <div id="profile-header">
            <ProfileHeader username={user.username} />
          </div>
        </div>
      </div>
      <div id="profile-history" className="row d-flex justify-content-center">
        <div className="col-7 ">
          <div id="profile-history">
            <ProfileTranslateHistory translations={user.translations} />
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuth(Profile);
