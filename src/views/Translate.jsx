import "./translate.css";
import { useState } from "react";
import { translationAdd } from "../api/translation";
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
    updatedUser = await translationAdd(user, originalText);

    if (updatedUser !== null) {
      storageSave(STORAGE_KEY_USER, updatedUser);
      setUser(updatedUser);
    }
  };

  return (
    <div className="">
      <div
        id="translate-form"
        className="row d-flex justify-content-center mb-3"
      >
        <div className="col-md-7 m-2">
          <h1>Translate</h1>
          <section id="translate-original" className="mb-1">
            <TranslateForm onTranslate={handleTranslateClick} />
          </section>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7 m-2">
          <section id="translated-img">
            <Translated input={inputText} />
          </section>
        </div>
      </div>
    </div>
  );
};
export default withAuth(Translate);
