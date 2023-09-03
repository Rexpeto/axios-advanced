import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getValidationError } from "../utilities";

export const AxiosInterceptor = () => {
  const updateHeader = (req: AxiosRequestConfig): AxiosRequestConfig<any> => {
    const token = "123456";
    const newHeader = {
      Authorization: token,
      "Content-Type": "application/json",
    };

    req.hearders = newHeader;
    return req;
  };
  axios.interceptors.request.use(
    (req: AxiosRequestConfig): AxiosRequestConfig<any> => {
      if (req?.url.includes("assets")) return req;
      return updateHeader(req);
    }
  );

  axios.interceptors.response.use(
    (res: AxiosResponse) => {
      console.log(res);
      return res;
    },
    (err) => {
      console.log("Error:", getValidationError(err.code));
      return Promise.reject(err);
    }
  );
};
