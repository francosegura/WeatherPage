import React, { useCallback, useLayoutEffect, useState } from "react";
import { useShallowEqualSelector } from "../utils/reduxUtils";
import { useDispatch } from "react-redux";
import { WeatherActions } from "../actions/weatherActions";
import { RootState } from "../reducers";
import { selectableCities } from "../services/mainClient";
import { GeneralWrapper } from "../components/Wrapper";
import { DaysSelector } from "../components/DaysSelector";
import { Spinner } from "../components/Spinner";
import { Title } from "../components/Title";
import { WeatherList } from "../components/WeatherList";

/*TODO: add useWeatherData hook to separate view layout of controller layout*/
/*TODO: use Jest to test all views*/
/*TODO: add i18n to customize the text's language */

const Weather = () => {
  const dispatch = useDispatch();
  const { currentCity, extraCity } = useShallowEqualSelector(
    (state: RootState) => state.weather
  );
  const [selectedCity, setSelectedCity] = useState("");

  const getWeatherByCity = useCallback(
    (city: string) => {
      dispatch(
        WeatherActions.fetchExtraCityStarted(selectableCities[city].coord)
      );
    },
    [dispatch]
  );

  useLayoutEffect(() => {
    selectedCity !== "" && getWeatherByCity(selectedCity);
  }, [selectedCity, getWeatherByCity]);

  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        WeatherActions.fetchStarted({
          lat: position.coords.latitude.toString(),
          lon: position.coords.longitude.toString(),
        })
      );
    });
  }, [dispatch]);

  return (
    <GeneralWrapper>
      <Title>Ciudad actual</Title>
      {currentCity.error && <Title>{currentCity.error}</Title>}
      {currentCity.fetching && <Spinner />}
      {currentCity.data && <WeatherList weatherDays={currentCity.data} />}
      <DaysSelector
        value={selectedCity}
        onDaysSelectorChange={setSelectedCity}
      />
      {selectedCity !== "" && (
        <>
          <Title>{selectableCities[selectedCity].displayName}</Title>
          {extraCity.fetching && <Spinner />}
          {extraCity.error && <Title>{extraCity.error}</Title>}
          {extraCity.data && <WeatherList weatherDays={extraCity.data} />}
        </>
      )}
    </GeneralWrapper>
  );
};

export default Weather;
