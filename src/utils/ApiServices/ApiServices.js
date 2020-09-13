import axios from "axios";
import { print } from "graphql";
import StorageServices from "../StorageServices";
import {
  GET_PROFILE_CURRENTS,
  GET_SCHOOLS,
  UPDATE_FAVORITE_PROFILE,
  GET_LEADERBOARD_BATTING,
  GET_TEAMS,
  GET_FACILITIES,
  GET_PROFILE_EVENTS,
  GET_BUTTING_SUMMARY,
  UPDATE_PROFILE_DATA,
  GET_BATTING_LOG,
  FILTER_PROFILE_NAMES,
  GET_COMPARISON_PLAYER,
  GET_PROFILE_FULLDATA,
  GET_LEADERBOARD_PITCHING,
  GET_PROFILES,
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

  getPlayerProfile = async ({ id }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_PROFILE_FULLDATA),
        variables: { id },
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
  getBattingSummary = async ({ userId }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_BUTTING_SUMMARY),
        variables: {
          id: userId,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getBattingLog = async ({
    userId,
    count,
    offset,
    pitcherType,
    searchName,
  }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_BATTING_LOG),
        variables: {
          input: {
            count,
            offset,
            profile_id: userId,
            pitch_type: pitcherType,
            pitcher_name: searchName,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
  getProfileEvents = async ({ userId, count, offset, date, eventType }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_PROFILE_EVENTS),
        variables: {
          input: {
            count,
            offset,
            date,
            profile_id: userId,
            event_type: eventType,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  filterProfileNames = async ({ playerName, position }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(FILTER_PROFILE_NAMES),
        variables: {
          input: {
            player_name: playerName,
            position,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getComparisonPlayer = async ({ id }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_COMPARISON_PLAYER),
        variables: {
          id,
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getLeaderboardBatting = async ({
    type,
    date,
    position,
    school,
    age,
    favorite,
    team,
  }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_LEADERBOARD_BATTING),
        variables: {
          input: {
            type,
            date,
            position,
            school,
            age,
            favorite,
            team,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getLeaderboardPitching = async ({
    type,
    date,
    position,
    school,
    age,
    favorite,
    team,
  }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_LEADERBOARD_PITCHING),
        variables: {
          input: {
            type,
            date,
            position,
            school,
            age,
            favorite,
            team,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  updateFavoriteProfile = async ({ id, favorite }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(UPDATE_FAVORITE_PROFILE),
        variables: {
          form: {
            profile_id: id,
            favorite,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  getPlayersProfiles = async ({
    profiles_count,
    offset,
    school,
    position,
    team,
    age,
    favorite,
    player_name,
  }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/graphql", {
        query: print(GET_PROFILES),
        variables: {
          input: {
            profiles_count,
            offset,
            school,
            position,
            team,
            age,
            favorite,
            player_name,
          },
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default new ApiServices();
