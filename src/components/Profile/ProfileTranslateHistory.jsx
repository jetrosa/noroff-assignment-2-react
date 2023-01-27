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
    <section className="flex flex-col p-5">
      <div className="justify-between flex">
        <p className="mt-2 font-ec text-md text-gray">Translation history</p>

        <TrashIcon
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
