class StorageServices {
  setHeadersDataToStore = ({ headers }) => {
    const { client, uid } = headers;
    const accessToken = headers["access-token"];
    return localStorage.setItem(
      "headers",
      JSON.stringify({ accessToken, client, uid })
    );
  };

  getHeadersDataFromStorage = () => {
    const headers = localStorage.getItem("headers");
    if (headers) {
      return JSON.parse(headers);
    } else {
      return JSON.stringify({
        accessToken: undefined,
        client: undefined,
        uid: undefined,
      });
    }
  };
  loadState = () => {
    const localStorageState = localStorage.getItem("state");
    if (!localStorageState) {
      return {};
    } else {
      return JSON.parse(localStorageState);
    }
  };
}

export default new StorageServices();
