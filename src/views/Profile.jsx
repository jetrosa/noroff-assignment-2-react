import { useEffect } from "react";
import { findUserById } from "../api/user";
import ProfileClearTranslationHistory from "../components/Profile/ProfileClearTranslationHistory";
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
      <h1>Profile</h1>
      <ProfileHeader username={user.username} />
      <ProfileClearTranslationHistory />
      <ProfileTranslateHistory translations={user.translations} />
    </>
  );
};
export default withAuth(Profile);
