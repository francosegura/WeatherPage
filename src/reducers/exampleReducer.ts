import { ACTIONS_EXAMPLE, ERROR, actionType } from '../actions/actionTypes';

type ExampleState = {
  name: string;
  status: string;
};

const initialState: ExampleState = {
  name: 'Soy un string inicial',
  status: 'Ok'
};

function exampleReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case ACTIONS_EXAMPLE.GET :
      return {
        ...state,
        status: 'FETCHING'
      };
    case ACTIONS_EXAMPLE.GET_SUCCESS:
      return {
        ...state,
        name: action.payload,
        status: 'Correcccto'
      };
    case ERROR.DEFAULT:
      return {
        ...state,
        status: 'Errore'
      };
    default:
      return state;
  }
}

export default exampleReducer;
