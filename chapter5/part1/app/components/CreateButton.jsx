import React, { PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func.isRequired
};
function CreateButton({ onClick }) {
  return (
    <div className="createButtonComponent">
      <button onClick={() => { onClick(); }}>创建新的Todo</button>
    </div>
  );
}

CreateButton.propTypes = propTypes;

export default CreateButton;
