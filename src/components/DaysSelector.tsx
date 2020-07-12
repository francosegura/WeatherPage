import styled from "styled-components";
import { selectableCities } from "../services/mainClient";
import React, { ChangeEvent } from "react";

const CustomSelect = styled.select`
  font-family: "Merriweather", serif;
  font-size: 2em;
`;

interface DaysSelectorType {
  value: string;
  onDaysSelectorChange: (value: string) => void;
}

export const DaysSelector = ({
  value,
  onDaysSelectorChange,
}: DaysSelectorType) => {
  const onChangeDay = (event: ChangeEvent<HTMLSelectElement>) =>
    onDaysSelectorChange(event.currentTarget.value);
  return (
    <CustomSelect onChange={onChangeDay} value={value}>
      <option value="">Seleccionar una ciudad</option>
      {Object.keys(selectableCities).map((city) => (
        <option key={city} value={city}>
          {selectableCities[city].displayName}
        </option>
      ))}
    </CustomSelect>
  );
};
