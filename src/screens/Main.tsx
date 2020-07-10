import React, { Fragment, useLayoutEffect } from "react";
import styled from "styled-components";
import { useShallowEqualSelector } from "../utils/reduxUtils";
import { useDispatch } from "react-redux";
import ActionExample from "../actions/actionExample";
import { RootState } from "../reducers";

const Title = styled.h1`
  margin-top: 2em;
`;

const Main = () => {
  const dispatch = useDispatch();
  const { name, status } = useShallowEqualSelector(
    (state: RootState) => state.example
  );
  useLayoutEffect(() => {
    dispatch(ActionExample.get());
  }, [dispatch]);

  return (
    <Fragment>
      <Title>Name: {name}</Title>
      <Title>Status: {status}</Title>
    </Fragment>
  );
};

export default Main;
