import { useState } from "react";
import { translateAdd } from "../api/history";
import TranslateForm from "../components/Translate/TranslateForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../auth/withAuth";
import { storageSave } from "../utils/storage";
import Translated from "../components/Translate/Translated";

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const { user, setUser } = useUser();

  const handleTranslateClick = async (originalText) => {
    if (originalText.trim() === "") {
      return;
    }
    setInputText(originalText);

    let updatedUser = user;
    updatedUser = await translateAdd(user, originalText);
    if (updatedUser !== null) {
      storageSave(STORAGE_KEY_USER, updatedUser);
      setUser(updatedUser);
    }
  };

  return (
    <>
      <h1>Translate</h1>
      <section id="translate-original">
        <TranslateForm onTranslate={handleTranslateClick} />
      </section>
      <section id="translated-img">
        <Translated input={inputText} />
      </section>
    </>
  );
};
export default withAuth(Translate);
