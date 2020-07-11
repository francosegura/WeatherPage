/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Action<Type extends string, Payload> {
  type: Type;
  payload: Payload;
  error: boolean;
}

function _createAction<Type extends string, Payload = any>(
  type: Type,
  error: boolean,
  payload: Payload
): Action<Type, Payload> {
  return {
    type,
    error,
    payload,
  };
}

export function createAction<Type extends string, Payload = any>(
  type: Type
): Action<Type, undefined>;

export function createAction<Type extends string, Payload = any>(
  type: Type,
  payload: Payload
): Action<Type, Payload>;

export function createAction<Type extends string, Payload = any>(
  type: Type,
  payload?: Payload
) {
  if (!payload) return _createAction<Type, undefined>(type, false, undefined);
  return _createAction<Type, Payload>(type, false, payload);
}

export function createErrorAction<Type extends string, Payload = any>(
  type: Type,
  error: Payload
): Action<Type, Payload> {
  return _createAction(type, true, error);
}
