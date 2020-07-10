export type actionType = {
  type: string;
  error?: boolean;
  payload?: string;
};

export const ERROR = {
  DEFAULT: "default_error",
};

export const ACTIONS_EXAMPLE = {
  GET: "get_blabla",
  GET_SUCCESS: "get_blabla_success",
};
