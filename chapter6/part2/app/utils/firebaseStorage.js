/*
 * @file storage based on firebase
 */

import uuid from 'uuid';
import { fetch, save } from './firebase';

export function getAll() {
  return fetch('list').then(list => list || []);
}

export function saveAll(list) {
  return save('list', list);
}

function updateAll(update) {
  return getAll()
    .then(update)
    .then(saveAll);
}

export function getEntry(id) {
  return fetch(`detail/${id}`);
}

export function insertEntry(title, content) {
  const summary = {
    title,
    id: uuid.v4(),
    time: new Date().getTime(),
  };

  const entry = {
    ...summary,
    content,
  };

  return Promise.all([
    updateAll(list => [...list, summary]),
    save(`detail/${entry.id}`, entry),
  ]).then(() => entry);
}

export function deleteEntry(id) {
  return Promise.all([
    updateAll(
      list => list.filter(
        summary => summary.id !== id
      )
    ),
    save(`detail/${id}`, null),
  ]);
}

export function updateEntry(id, title, content) {
  const name = `detail/${id}`;
  let entry;

  return Promise.all([
    updateAll(
      list => list.map(
        summary => (
          summary.id === id
          ? {
            ...summary,
            title,
          }
          : summary
        )
      )
    ),
    fetch(name).then(
      saved => {
        entry = {
          ...saved,
          title,
          content,
        };
        return save(name, entry);
      }
    ),
  ]).then(() => entry);
}
