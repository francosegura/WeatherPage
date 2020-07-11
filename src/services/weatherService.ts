import { GetWeatherOptions, GetWeatherResponse } from "../actions/actionTypes";
import { OpenWeatherApiClient, defaultParams } from "./mainClient";
import qs from "query-string";

const weatherUrls = {
  getWeatherByCity: "onecall",
};

export async function getWeatherByCity(options: GetWeatherOptions) {
  return OpenWeatherApiClient.get<GetWeatherResponse>(
    weatherUrls.getWeatherByCity,
    {
      params: { ...options, ...defaultParams },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    }
  ).then((response) => response.data);
}
