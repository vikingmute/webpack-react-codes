/*
 * @file component Item
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
const propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

function ListItem({ item, onClick, selected }) {
  let formatTime = '未知时间';
  if (item.time) {
    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
  }
  const liKlass = classNames({
    'list-group-item d-flex justify-content-between align-items-center item-component': true,
    active: selected,
  });
  const spanKlass = classNames({
    'badge badge-pill': true,
    'badge-secondary': !selected,
    'badge-light': selected,
  });
  return (
    <a
      href="#"
      className={liKlass}
      onClick={onClick}
    >
      {item.title}
      <span className={spanKlass}>
        {formatTime}
      </span>
    </a>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
