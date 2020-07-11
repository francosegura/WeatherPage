import styled from "styled-components";

export const WeatherDayWrapper = styled.div`
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(9, 72, 121, 1) 30%,
    rgba(0, 212, 255, 0.52) 100%
  );
  border-radius: 7px;
  box-shadow: 9px 10px 15px -10px rgba(0, 0, 0, 0.75);
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 180px;
`;

export const WeatherDaysListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
