import React from "react";
import spinner from "../images/spinner.gif";
import styled from "styled-components";

const SpinnerIcon = styled.img`
  height: 200px;
  width: 200px;
`;

const SpinnerWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerIcon alt="" src={spinner} />
  </SpinnerWrapper>
);
