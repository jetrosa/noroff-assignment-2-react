const apiKey = process.env.REACT_APP_API_KEY;

export const createHeaders = () => {
  return {
    "content-Type": "application/json",
    "x-api-key": apiKey,
  };
};
export const handleResponse = () => {};
