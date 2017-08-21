/*
 * @file component CreateBar
 */

import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

function CreateBar({ onClick }) {
  return (
    <a href="#" onClick={onClick} className="list-group-item create-bar-component">
      + 创建新的文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
