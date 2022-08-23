// #region Global Imports
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {Buffer} from "buffer";

import {LANG_TYPES} from "../constants/enums";
import storage from "../helpers/localStorage";

const configs: AxiosRequestConfig = {
  baseURL: `${process.env.SERVER_API_URL}`, // use API_ENDPOINT_LOCAL to call local server
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Accept-Language": storage.getLanguage() || LANG_TYPES.ENGLISH,
  },
  timeout: 60000,
};
const UploadMultiPartConfig: AxiosRequestConfig = {
  headers: {"Content-Type": "multipart/form-data"},
  timeout: 1000000,
};
const ArrayBufferResponseConfig: AxiosRequestConfig = {
  responseType: "arraybuffer", // Use arraybuffer instead of blob because blob does not work wel for large file
};

const axiosClient: AxiosInstance = axios.create(configs);
axiosClient.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers["Accept-Language"] =
    storage.getLanguage() || LANG_TYPES.ENGLISH;
  const authorization = storage.getAccessToken();
  if (authorization) {
    request.headers.Authorization = `${authorization}`;
  }

  return request;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if ([200, 201].includes(response.status) && response.data) {
      if (
        response.request.responseType === ArrayBufferResponseConfig.responseType
      ) {
        const contentDisposition = response.headers["content-disposition"];
        const fileNameDefine = contentDisposition?.split(";")[1];
        const fileName = fileNameDefine?.split("=")[1]?.replace('"', "");
        return {fileName, data: response.data};
      }

      return response.data;
    }
    return Promise.reject(response.statusText || "");
  },
  error => {
    const status = error?.response?.status;
    // Parse arraybuffer error into json
    if (error.request.responseType === ArrayBufferResponseConfig.responseType) {
      error.response.data = JSON.parse(
        Buffer.from(error.response.data).toString(),
      );
    }

    if (status === 401 || status === 414) {
      storage.removeAccessToken();
      storage.removeRefreshToken();
    }
    return Promise.reject(error?.response?.data);
  },
);

export {configs, UploadMultiPartConfig, ArrayBufferResponseConfig};
export default axiosClient;
