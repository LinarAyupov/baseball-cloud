export const setHeadersDataToStore = ({ headers }) => {
  const { client, uid } = headers;
  const accessToken = headers["access-token"];
  return localStorage.setItem(
    "headers",
    JSON.stringify({ accessToken, client, uid })
  );
};

export const getHeadersDataFromStorage = () => {
  const headers = localStorage.getItem("headers");
  if (headers) {
    return headers;
  } else {
    return JSON.stringify({
      accessToken: undefined,
      client: undefined,
      uid: undefined,
    });
  }
};
