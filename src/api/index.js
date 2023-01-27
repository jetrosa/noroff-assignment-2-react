const apiKey = process.env.REACT_APP_API_KEY;

export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  };
};
export const handleResponse = () => {};
