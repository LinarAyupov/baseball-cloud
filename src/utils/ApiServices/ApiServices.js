import axios from "axios";
import { print } from "graphql";
import StorageServices from "../StorageServices";
import {
  GET_PROFILE_CURRENTS,
  GET_SCHOOLS,
  GET_NOTIFICATIONS,
  GET_LEADERBOARD_BATTING,
  GET_TEAMS,
  GET_FACILITIES,
  GET_PROFILE_FULLDATA,
  GET_PROFILE_EVENTS,
  GET_BUTTING_SUMMARY,
  UPDATE_PROFILE_DATA,
  GET_BATTING_LOG,
} from "../queries";

class ApiServices {
  axiosInstance = async () => {
    const {
      accessToken,
      client,
      uid,
    } = await StorageServices.getHeadersDataFromStorage();
    let headers = {};
    if (accessToken) {
      headers = {
        ...headers,
        "Access-Token": accessToken,
        Client: client,
        Uid: uid,
      };
    }

    return axios.create({
      baseURL: "https://baseballcloud-back.herokuapp.com/api/v1",
      headers,
    });
  };

  singIn = async ({ userData }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/auth/sign_in", userData);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  singUp = async ({ userData }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/auth", userData);
      return response;
    } catch (err) {
      throw err;
    }
  };
  getProfileCurrents = async () => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_PROFILE_CURRENTS),
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
  getSchoolList = async ({ searchText }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_SCHOOLS),
        variables: {
          search: searchText,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
  getTeamsList = async ({ searchText }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_TEAMS),
        variables: {
          search: searchText,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
  getFacilities = async ({ searchText }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_FACILITIES),
        variables: {
          search: searchText,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  updateProfile = async ({ profileCounts }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(UPDATE_PROFILE_DATA),
        variables: {
          form: profileCounts,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  uploadPhoto = async ({ imageFile }) => {
    const { name } = imageFile;
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const request = await this.axiosInstance();
      const { data } = await request.post("/s3/signed_url", {
        name,
      });
      const { signedUrl } = data;
      await axios.put(signedUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return signedUrl;
    } catch (err) {
      throw err;
    }
  };
}

export default new ApiServices();
