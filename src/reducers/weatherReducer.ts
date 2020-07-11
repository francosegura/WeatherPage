import { WeatherAction, WeatherActionType } from "../actions/weatherActions";
import { GetWeatherResponse } from "../actions/actionTypes";

export interface WeatherState {
  data?: GetWeatherResponse;
  fetching: boolean;
  error?: string;
}

const initialState: WeatherState = {
  data: undefined,
  fetching: false,
  error: undefined,
};

export function weatherReducer(
  state = initialState,
  action: WeatherAction
): WeatherState {
  switch (action.type) {
    case WeatherActionType.FetchStarted:
      return {
        ...state,
        fetching: true,
        error: undefined,
      };
    case WeatherActionType.FetchSuccess:
      return {
        ...state,
        data: action.payload,
        fetching: false,
      };
    case WeatherActionType.FetchError:
      return {
        ...state,
        fetching: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
