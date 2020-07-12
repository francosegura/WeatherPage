import { WeatherAction, WeatherActionType } from "../actions/weatherActions";
import { GetWeatherResponse } from "../actions/actionTypes";

export interface WeatherState {
  currentCity: {
    data?: GetWeatherResponse;
    fetching: boolean;
    error?: string;
  };
  extraCity: {
    data?: GetWeatherResponse;
    fetching: boolean;
    error?: string;
  };
}

const initialState: WeatherState = {
  currentCity: {
    data: undefined,
    fetching: false,
    error: undefined,
  },
  extraCity: {
    data: undefined,
    fetching: false,
    error: undefined,
  },
};

export function weatherReducer(
  state = initialState,
  action: WeatherAction
): WeatherState {
  switch (action.type) {
    case WeatherActionType.FetchStarted:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          fetching: true,
          error: undefined,
        },
      };
    case WeatherActionType.FetchSuccess:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          fetching: false,
          data: action.payload,
        },
      };
    case WeatherActionType.FetchError:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          fetching: false,
          error: action.payload.message,
        },
      };
    case WeatherActionType.FetchExtraCityStarted:
      return {
        ...state,
        extraCity: {
          ...state.extraCity,
          fetching: true,
          error: undefined,
        },
      };
    case WeatherActionType.FetchExtraCitySuccess:
      return {
        ...state,
        extraCity: {
          ...state.extraCity,
          fetching: false,
          data: action.payload,
        },
      };
    case WeatherActionType.FetchExtraCityError:
      return {
        ...state,
        extraCity: {
          ...state.extraCity,
          fetching: false,
          error: action.payload.message,
        },
      };
    default:
      return state;
  }
}
