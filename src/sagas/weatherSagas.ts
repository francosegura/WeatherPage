import { call, put, takeLatest } from "redux-saga/effects";
import {
  FetchStartedAction,
  WeatherActions,
  WeatherActionType,
} from "../actions/weatherActions";
import { GetWeatherResponse } from "../actions/actionTypes";
import { getWeatherByCity } from "../services";

function* fetchWeather(action: FetchStartedAction) {
  try {
    const getWeatherResponse: GetWeatherResponse = yield call(
      getWeatherByCity,
      action.payload
    );
    yield put(WeatherActions.fetchSuccess(getWeatherResponse));
  } catch (error) {
    yield put(WeatherActions.fetchError(error));
  }
}

function* weatherSagas() {
  yield takeLatest(WeatherActionType.FetchStarted, fetchWeather);
}

export default weatherSagas;
