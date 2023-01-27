import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

export const translateAdd = async (user, text) => {
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

export const translateClearHistory = async (userId) => {
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
