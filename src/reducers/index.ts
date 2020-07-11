import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

const allReducers = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
