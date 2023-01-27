import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslateHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));
  return (
    <section>
      <h4>Your translation history</h4>
      {translationList.length === 0 && <p>Empty</p>}
      <ol>{translationList}</ol>
    </section>
  );
};
export default ProfileTranslateHistory;
