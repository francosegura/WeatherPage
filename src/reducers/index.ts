import { combineReducers } from "redux";
import ExampleReducer from "./exampleReducer";

const allReducers = combineReducers({
  example: ExampleReducer,
});
export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
