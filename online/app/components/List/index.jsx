/*
 * @file component List
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

function List({ items, onSelect, selectedId }) {
  const itemsContent = items.map(
    item => {
      const selected = item.objectId === selectedId;
      return (
        <ListItem
          item={item}
          key={item.objectId}
          selected = {selected}
          onClick={() => onSelect(item.objectId)}
        />
      );
    }
  );

  return (
    <div className="list-component">
      {itemsContent}
    </div>
  );
}

List.propTypes = propTypes;

export default List;
