// @ts-nocheck
import {
  ${2:TState},
  ${3:TActionTypes},
  ${4:SOME_ACTION},
} from './types';

const initialState: ${2:TState} = {
  $5,
}

export const ${1:someReducer} = (
  state = initialState,
  action: ${3:TActionTypes},
): ${2:TState} => {
  switch (action.type) {
    case ${4:SOME_ACTION}: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}