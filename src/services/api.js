import axios from "axios";
import { logout } from "../context/auth/context-service";
import { LOCAL_STORAGE_KEYS } from "../config/constants";

const constants = {
  main: {
    url: "https://note-dev.knowdisdata.com/api/",
  },
  unAuth: {
    url: "https://note-dev.knowdisdata.com/api/umg"
  },
};

const config = {
  headers: {
    "content-type": "application/json",
  },
};


export const getAccessToken = () => {
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN))
    ? JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN))
    : null;
};

const appendAdditionalRequestInfo = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers["x-access-token"] = getAccessToken();
      return config;
    },
    function (error) {
      console.log("inside error request");
      console.log(error);
    }
  );

  instance.interceptors.response.use(
    (config) => {
      if(config.data.code === 'S') {
        return config.data.data;
      } else {
        return Promise.reject(config.data.data);
      }
    },
    async function (err) {
      if(err.response) {
        const { response } = err;
        if(response.status === 401) {
          await logout();
          window.location.href = "login";
        }
        return Promise.reject(err);
      }
    }
  );
  return instance;
};

const getAxiosInstance = {
  unAuth: () =>
    axios.create({
      baseURL: constants.unAuth.url,
      ...config,
    }),
  main: () => {
    const instance = axios.create({
      baseURL: constants.main.url,
      ...config,
    });
    return appendAdditionalRequestInfo(instance);
  }
};

const api = {
  main: getAxiosInstance.main(),
  unAuth: getAxiosInstance.unAuth(),
};

export default api;
