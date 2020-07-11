import React, { Fragment, useLayoutEffect } from "react";
import { useShallowEqualSelector } from "../utils/reduxUtils";
import { useDispatch } from "react-redux";
import { WeatherActions } from "../actions/weatherActions";
import { RootState } from "../reducers";
import { Title } from "../components/Title";
import { WeatherList } from "../components/WeatherList";

const Weather = () => {
  const dispatch = useDispatch();
  const currentCityData = useShallowEqualSelector(
    (state: RootState) => state.weather.currentCityData
  );
  useLayoutEffect(() => {
    dispatch(
      WeatherActions.fetchStarted({ lon: "-58.450001", lat: "-34.599998" })
    );
  }, [dispatch]);

  return (
    <Fragment>
      {currentCityData && (
        <Fragment>
          <Title>Ciudad actual</Title>
          <WeatherList weatherDays={currentCityData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Weather;
