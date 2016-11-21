import React from 'react';
import { render } from 'react-dom';
import Profile from './Profile';

const ele = document.createElement('div');
document.body.appendChild(ele);
const props = {
  name: 'viking',
  age: 20
};
render(<Profile {...props} />, ele);
