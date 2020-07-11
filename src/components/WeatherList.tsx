import React from "react";
import { WeatherDayWrapper, WeatherDaysListWrapper } from "./Wrapper";
import { GetWeatherResponse } from "../actions/actionTypes";
import { getDateFromTimestamp, getDayOfTheWeek } from "../utils/dateUtils";
import { toCapitalize } from "../utils/stringUtils";
import { WeatherDayTitle } from "./WeatherDayTitle";
import { WeatherIcon } from "./WeatherIcon";

export const WeatherList = ({
  weatherDays,
}: {
  weatherDays: GetWeatherResponse;
}) => {
  return (
    <WeatherDaysListWrapper>
      {weatherDays.daily.map(
        (daily, index) =>
          index < 6 && (
            <WeatherDayWrapper key={daily.dt}>
              <WeatherDayTitle>
                {toCapitalize(getDayOfTheWeek(daily.dt))}
              </WeatherDayTitle>
              <WeatherIcon
                alt={daily.weather[0].icon}
                src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
              />
              <h3>{getDateFromTimestamp(daily.dt)}</h3>
              <h3>{daily.weather[0].description}</h3>
              <h3>
                {daily.temp.min}ºC / {daily.temp.max}ºC
              </h3>
              <h3>{daily.humidity}%</h3>
              <h3>
                {Math.round(((daily.wind_speed * 100) / 36) * 10) / 10} km/h
              </h3>
            </WeatherDayWrapper>
          )
      )}
    </WeatherDaysListWrapper>
  );
};
