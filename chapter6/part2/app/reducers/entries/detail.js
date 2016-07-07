/*
 * @file reducers for entries' detail
 */

import * as ActionTypes from 'actions';

const initialState = {};

const { pendingOf, fulfilledOf } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;
  let id;
  let entry;

  switch (type) {

    case pendingOf(ActionTypes.FETCH_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true,
        },
      };

    case fulfilledOf(ActionTypes.FETCH_ENTRY):
      entry = payload;
      return {
        ...state,
        [entry.id]: {
          data: entry,
          isFetching: false,
        },
      };

    case pendingOf(ActionTypes.SAVE_ENTRY):
      id = payload.id;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true,
        },
      };

    case fulfilledOf(ActionTypes.SAVE_ENTRY):
      entry = payload;
      return {
        ...state,
        [entry.id]: {
          data: entry,
          isFetching: false,
        },
      };

    case pendingOf(ActionTypes.DELETE_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true,
        },
      };

    case fulfilledOf(ActionTypes.DELETE_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          data: null,
          isFetching: false,
        },
      };

    default:
      return state;
  }
}
