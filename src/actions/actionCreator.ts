import { actionType } from "./actionTypes";

export const createAction = ({ type, error, payload }: actionType) => {
  return {
    type,
    error,
    payload,
  };
};
