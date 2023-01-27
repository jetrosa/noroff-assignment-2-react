import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";
import { TrashIcon } from "@heroicons/react/24/solid";

const ProfileTranslateHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslateHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));
  return (
    <section>
      <div>
        <p>Translation history</p>

        <TrashIcon
          style={{ height: 24, width: 24 }}
          onClick={() => {
            //clear
          }}
        />
      </div>

      <section>
        <h4>Your translation history</h4>
        {translationList.length === 0 && <p>Empty</p>}
        <ol>{translationList}</ol>
      </section>
    </section>
  );
};
export default ProfileTranslateHistory;
