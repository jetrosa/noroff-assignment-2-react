import { TrashIcon } from "@heroicons/react/24/solid";
import { translationClearHistory } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";

const ProfileClearTranslationHistory = () => {
  const { user, setUser } = useUser();

  const handleClearHistoryClick = async () => {
    if (
      !window.confirm("Your translation history will be deleted. Are you sure?")
    ) {
      return;
    }
    await translationClearHistory(user.id);

    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };
  return (
    <div className="image-button" onClick={handleClearHistoryClick}>
      <TrashIcon style={{ height: 30, width: 30 }} />
    </div>
  );
};
export default ProfileClearTranslationHistory;
