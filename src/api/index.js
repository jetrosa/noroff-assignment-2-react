const apiKey = process.env.REACT_APP_API_KEY;

/**
 * Sets default HTTP headers including API key from environment variables
 * @returns Returns HTTP headers
 */
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  };
};
export const handleResponse = () => {};
