import {
  useSelector as useSelectorRedux,
  shallowEqual,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "../reducers";

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;

export function useShallowEqualSelector<TSelected>(
  selector: (s: RootState) => TSelected
) {
  return useSelector(selector, shallowEqual);
}
