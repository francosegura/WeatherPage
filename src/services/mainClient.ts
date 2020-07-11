import axios from "axios";

const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const defaultParams = {
  appid: "ad10024397e7abcc782d1afaaf9811c1",
  units: "metric",
  lang: "sp",
  exclude: "minutely,hourly,current",
};

export const OpenWeatherApiClient = {
  get: openWeatherApi.get,
};
