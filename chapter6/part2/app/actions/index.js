/*
 * @file actions
 */

import * as storage from 'utils/firebaseStorage';

// sync actions
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function selectEntry(id) {
  return dispatch => {
    dispatch({
      type: SELECT_ENTRY,
      payload: id,
    });

    dispatch(fetchEntry(id));
  };
}

export function createNewEntry() {
  return { type: CREATE_NEW_ENTRY };
}

export function editEntry(id) {
  return {
    type: EDIT_ENTRY,
    payload: id,
  };
}

export function cancelEdit() {
  return { type: CANCEL_EDIT };
}

// default promiseTypeSuffixes of redux-promise-middleware:
// ['PENDING', 'FULFILLED', 'REJECTED']
export const pendingOf = actionType => `${actionType}_PENDING`;
export const fulfilledOf = actionType => `${actionType}_FULFILLED`;
export const rejectedOf = actionType => `${actionType}_REJECTED`;

// async actions generated with redux-promise-middleware:
export const FETCH_ENTRY = 'FETCH_ENTRY';
export const FETCH_ENTRY_LIST = 'FETCH_ENTRY_LIST';
export const SAVE_ENTRY = 'SAVE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export function fetchEntry(id) {
  return {
    type: FETCH_ENTRY,
    payload: {
      promise: storage.getEntry(id),
      data: id,
    },
  };
}

export function fetchEntryList() {
  return {
    type: FETCH_ENTRY_LIST,
    payload: storage.getAll(),
  };
}

export function saveEntry(entry) {
  const promise = entry.id
    ? storage.updateEntry(
      entry.id,
      entry.title,
      entry.content
    )
    : storage.insertEntry(
      entry.title,
      entry.content
    );

  return dispatch => {
    dispatch({
      type: SAVE_ENTRY,
      payload: {
        promise,
        data: entry,
      },
    });

    promise.then(
      () => dispatch(fetchEntryList())
    );
  };
}

export function deleteEntry(id) {
  const promise = storage.deleteEntry(id).then(() => id);

  return dispatch => {
    dispatch({
      type: DELETE_ENTRY,
      payload: {
        promise,
        data: id,
      },
    });

    promise.then(
      () => dispatch(fetchEntryList())
    );
  };
}
