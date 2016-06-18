import React, { PropTypes } from 'react';

const propTypes = {
  hobby: PropTypes.string.isRequired
};

function Hobby(props) {
  return <li>{props.hobby}</li>;
}

Hobby.propTypes = propTypes;

export default Hobby;
