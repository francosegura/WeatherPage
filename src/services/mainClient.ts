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

interface City {
  displayName: string;
  coord: {
    lon: string;
    lat: string;
  };
}

export const selectableCities: Record<string, City> = {
  BuenosAires: {
    displayName: "Buenos Aires",
    coord: { lon: "-58.450001", lat: "-34.599998" },
  },
  NewYork: {
    displayName: "New York",
    coord: {
      lon: "-74.005966",
      lat: "40.714272",
    },
  },
  London: {
    displayName: "London",
    coord: {
      lon: "-119.443176",
      lat: "36.476059",
    },
  },
  HongKong: {
    displayName: "Hong Kong",
    coord: {
      lon: "114.157692",
      lat: "22.285521",
    },
  },
  Moscow: {
    displayName: "Moscow",
    coord: {
      lon: "-75.518517",
      lat: "41.33675",
    },
  },
  IslasMalvinas: {
    displayName: "Islas Malvinas",
    coord: {
      lon: "-59.166672",
      lat: "-51.75",
    },
  },
};

export const OpenWeatherApiClient = {
  get: openWeatherApi.get,
};
