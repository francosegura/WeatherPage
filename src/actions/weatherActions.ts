import { createAction, createErrorAction } from "./actionCreator";
import { GetWeatherOptions, GetWeatherResponse } from "./actionTypes";

export enum WeatherActionType {
  FetchStarted = "weather/fetch_started",
  FetchSuccess = "weather/fetch_success",
  FetchError = "weather/fetch_error",
  FetchExtraCityStarted = "weather/fetch_extra_city_started",
  FetchExtraCitySuccess = "weather/fetch_extra_city_success",
  FetchExtraCityError = "weather/fetch_extra_city_error",
}

export interface FetchStartedAction {
  type: WeatherActionType.FetchStarted;
  payload: GetWeatherOptions;
}

export interface FetchSuccessAction {
  type: WeatherActionType.FetchSuccess;
  payload: GetWeatherResponse;
}

export interface FetchErrorAction {
  type: WeatherActionType.FetchError;
  payload: Error;
  error: true;
}

export interface FetchExtraCityStartedAction {
  type: WeatherActionType.FetchExtraCityStarted;
  payload: GetWeatherOptions;
}

export interface FetchExtraCitySuccessAction {
  type: WeatherActionType.FetchExtraCitySuccess;
  payload: GetWeatherResponse;
}

export interface FetchExtraCityErrorAction {
  type: WeatherActionType.FetchExtraCityError;
  payload: Error;
  error: true;
}

export type WeatherAction =
  | FetchStartedAction
  | FetchSuccessAction
  | FetchErrorAction
  | FetchExtraCityStartedAction
  | FetchExtraCitySuccessAction
  | FetchExtraCityErrorAction;

export const WeatherActions = {
  fetchStarted: (params: GetWeatherOptions) =>
    createAction(WeatherActionType.FetchStarted, params),
  fetchSuccess: (data: GetWeatherResponse) =>
    createAction(WeatherActionType.FetchSuccess, data),
  fetchError: (error: unknown) =>
    createErrorAction(WeatherActionType.FetchError, error),
  fetchExtraCityStarted: (params: GetWeatherOptions) =>
    createAction(WeatherActionType.FetchExtraCityStarted, params),
  fetchExtraCitySuccess: (data: GetWeatherResponse) =>
    createAction(WeatherActionType.FetchExtraCitySuccess, data),
  fetchExtraCityError: (error: unknown) =>
    createErrorAction(WeatherActionType.FetchExtraCityError, error),
};
