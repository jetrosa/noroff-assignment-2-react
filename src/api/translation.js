import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Stores a text that was translated into the user's translation history (API PATCH).
 * @param {user} user User object (logged in user)
 * @param {*} text Original text that was translated
 * @returns {JSON} Returns a JSON response (updated user)
 */
export const translationAdd = async (user, text) => {
  const currentTranslations = [...user.translations];
  if (currentTranslations.length > 9) {
    currentTranslations.shift();
    user.translations = currentTranslations;
  }

  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, text],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not update translation history");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Truncates user's translation history in the API (PATCH).
 * @param {*} userId
 * @returns {JSON} Returns a JSON response (updated user)
 */
export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });

    if (!response.ok) {
      throw new Error("Could clear translation history");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
