import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Loader({ backDrop = false }) {
  return (
    <div className="loader-component">
      {(backDrop) ? <div className="backdrop"></div> : ''}
      <div className="loader"></div>
    </div>
  );
}
Loader.propTypes = {
  backDrop: PropTypes.bool.isRequired,
};
export default Loader;
