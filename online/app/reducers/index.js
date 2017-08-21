/*
 * @file reducers
 */

import { combineReducers } from 'redux';
import entries from './entries';
import editor from './editor';

export default combineReducers({
  entries,
  editor,
});
