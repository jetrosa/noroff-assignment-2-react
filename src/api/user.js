import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Checks if a user exists in the database (fetch user by username).
 * @param {String} username
 * @returns {[error.message, [data]]} error message and response (user) as JSON
 */
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete the request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * Creates a new user (API POST)
 * @param {String} username
 * @returns {[error.message, [data]]} error message and response (user) as JSON
 */
const userCreate = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * Checks if a user by the provided username exists and retrieve the user.
 * Creates a new user if the user doesn't exist yet.
 * @param {*} username
 * @returns {[error.message, [data]]} error message and response (user) as JSON
 */
export const userLogin = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return userCreate(username);
};

/**
 * Checks if a user exists in the database (fetch user by ID).
 * @param {number} userId
 * @returns {[error.message, [data]]} error message and response (user) as JSON
 */
export const findUserById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);

    if (!response.ok) {
      throw new Error("Could not fetch the user.");
    }
    const user = await response.json();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
