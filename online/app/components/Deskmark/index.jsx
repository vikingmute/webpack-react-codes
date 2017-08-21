/*
 * @file component deskmark
 */

import React from 'react';
import PropTypes from 'prop-types';
import CreateBar from 'components/CreateBar';
import List from 'components/List';
import ItemShowLayer from 'components/ItemShowLayer';
import ItemEditor from 'components/ItemEditor';
import Loader from 'components/Loader';
import './style.scss';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

class Deskmark extends React.Component {

  componentDidMount() {
    this.props.actions.fetchEntryList();
  }
  checkIsLoading = (state) => {
    // check if the list is fetching
    const listIsFetching = state.entries.list.isFetching;
    // check if one of the details is fetch
    const details = state.entries.detail;
    const oneOfDetailIsFetching = Object.keys(details).some(keyId => details[keyId].isFetching);
    return listIsFetching || oneOfDetailIsFetching;
  }
  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const detailedEntries = state.entries.detail;
    const loading = this.checkIsLoading(state);
    const entryList = state.entries.list.data;
    const entry = (
      selectedId
      && detailedEntries[selectedId]
      && detailedEntries[selectedId].data
    ) || null;
    const loadingIcon = loading ? <Loader backDrop /> : '';
    const mainPart = isEditing
      ? (
        <ItemEditor
          item={entry}
          onSave={actions.saveEntry}
          onCancel={actions.cancelEdit}
        />
      )
      : (
        <ItemShowLayer
          item={entry}
          onEdit={actions.editEntry}
          onDelete={actions.deleteEntry}
        />
      );

    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        {loadingIcon}
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onClick={actions.createNewEntry} />
              <List
                items={entryList}
                onSelect={actions.selectEntry}
                selectedId={selectedId}
              />
            </div>
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}

Deskmark.propTypes = propTypes;

export default Deskmark;
