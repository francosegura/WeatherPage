import { all } from "redux-saga/effects";
import weatherSagas from "./weatherSagas";

function* rootSaga() {
  yield all([weatherSagas()]);
}
export default rootSaga;
