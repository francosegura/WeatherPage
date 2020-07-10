import { ACTIONS_EXAMPLE, ERROR } from "./actionTypes";
import { createAction } from "./actionCreator";

const ActionExample = {
  get: () => createAction({ type: ACTIONS_EXAMPLE.GET }),
  getSuccess: (nameFromApi: string) =>
    createAction({ type: ACTIONS_EXAMPLE.GET_SUCCESS, payload: nameFromApi }),
  getError: (errorMessage: string) =>
    createAction({ type: ERROR.DEFAULT, error: true, payload: errorMessage }),
};
export default ActionExample;
