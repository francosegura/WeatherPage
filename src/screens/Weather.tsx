import React, { Fragment, useLayoutEffect } from "react";
import styled from "styled-components";
import { useShallowEqualSelector } from "../utils/reduxUtils";
import { useDispatch } from "react-redux";
import { WeatherActions } from "../actions/weatherActions";
import { RootState } from "../reducers";
import moment from "moment";

const Title = styled.h1`
  margin-top: 1em;
`;

const getDateFromTimestamp = (ts: number) => {
  return moment(ts * 1000).format("DD/MM/YYYY");
};

const Weather = () => {
  const dispatch = useDispatch();
  const { data } = useShallowEqualSelector((state: RootState) => state.weather);
  useLayoutEffect(() => {
    dispatch(
      WeatherActions.fetchStarted({ lon: "-58.450001", lat: "-34.599998" })
    );
  }, [dispatch]);

  return (
    <Fragment>
      {data && (
        <Fragment>
          <Title>Today</Title>
          <Title>{getDateFromTimestamp(data.daily[0].dt)}</Title>
          <Title>{data.daily[0].weather[0].icon}</Title>
          <Title>{data.daily[0].weather[0].description}</Title>
          <Title>
            {data.daily[0].temp.min}ºC / {data.daily[0].temp.max}ºC
          </Title>
          <Title>{data.daily[0].humidity}%</Title>
          <Title>
            {Math.round(((data.daily[0].wind_speed * 100) / 36) * 10) / 10} km/h
          </Title>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Weather;
