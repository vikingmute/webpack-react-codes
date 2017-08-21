/*
 * @file component ItemShowLayer
 */

/* eslint react/no-danger: 0 */

import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({ item, onEdit, onDelete }) {
  if (!item || !item.objectId) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    );
  }

  const content = marked(item.content);

  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button onClick={() => onEdit(item.objectId)} className="btn btn-primary">编辑</button>
        <button onClick={() => onDelete(item.objectId)} className="btn btn-danger">删除</button>
      </div>
      <h4>{item.title}</h4>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;
