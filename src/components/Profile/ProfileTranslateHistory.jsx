import ProfileClearTranslationHistory from "./ProfileClearTranslationHistory";
import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {
  const translationList = translations
    .slice(0)
    .reverse()
    .map((translation, index) => (
      <ProfileTranslateHistoryItem
        key={index + "-" + translation}
        translation={translation}
      />
    ));
  return (
    <section>
      <div className="d-flex">
        <div className="me-3">
          <h4>Your translation history</h4>
        </div>
        <ProfileClearTranslationHistory />
      </div>
      {translationList.length === 0 && <p>Empty</p>}
      <ol>{translationList}</ol>
    </section>
  );
};
export default ProfileTranslateHistory;
