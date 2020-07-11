import { createAction, createErrorAction } from "./actionCreator";
import {GetWeatherOptions, GetWeatherResponse} from "./actionTypes";

export enum WeatherActionType {
  FetchStarted = "weather/fetch",
  FetchSuccess = "weather/fetch_success",
  FetchError = "weather/fetch_error",
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

export type WeatherAction =
  | FetchStartedAction
  | FetchSuccessAction
  | FetchErrorAction;

export const WeatherActions = {
  fetchStarted: (params: GetWeatherOptions) =>
    createAction(WeatherActionType.FetchStarted, params),
  fetchSuccess: (data: GetWeatherResponse) =>
    createAction(WeatherActionType.FetchSuccess, data),
  fetchError: (error: unknown) =>
    createErrorAction(WeatherActionType.FetchError, error),
};
