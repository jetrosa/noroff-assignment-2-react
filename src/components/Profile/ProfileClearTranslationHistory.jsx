import { TrashIcon } from "@heroicons/react/24/solid";
import { translateClearHistory } from "../../api/history";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";

const ProfileClearTranslationHistory = () => {
  const { user, setUser } = useUser();

  const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    await translateClearHistory(user.id);

    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };
  return (
    <TrashIcon
      style={{ height: 24, width: 24 }}
      onClick={handleClearHistoryClick}
    />
  );
};
export default ProfileClearTranslationHistory;
