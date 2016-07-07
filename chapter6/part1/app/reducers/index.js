/*
 * @file main file for reducers
 */

import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';

const rootReducer = combineReducers({
  items,
  editor,
});

export default rootReducer;
