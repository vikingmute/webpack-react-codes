/*
 * @file component Item
 */

import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ListItem({ item, onClick }) {
  let formatTime = '未知时间';
  if (item.time) {
    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
  }
  return (
    <a
      href="#"
      className="list-group-item item-component"
      onClick={onClick}
    >
      <span className="label label-default label-pill pull-xs-right">
        {formatTime}
      </span>
      {item.title}
    </a>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
