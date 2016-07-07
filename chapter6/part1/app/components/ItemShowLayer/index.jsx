/*
 * @file component ItemShowLayer
 */

/* eslint react/no-danger: 0 */

import './style.scss';

import React, { PropTypes } from 'react';
import marked from 'marked';

const propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({ item, onEdit, onDelete }) {
  if (!item || !item.id) {
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
        <button onClick={() => onEdit(item.id)} className="btn btn-primary">编辑</button>
        <button onClick={() => onDelete(item.id)} className="btn btn-danger">删除</button>
      </div>
      <h2>{item.title}</h2>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;
