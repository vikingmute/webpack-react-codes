import AV from 'leancloud-storage';

const APP_ID = '3beldflev5pnsYjPjr9lCucK-gzGzoHsz';
const APP_KEY = '4yxrNDznib4EtjRSHek2O0K5';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

const Entry = AV.Object.extend('Entry');

export function getAll() {
  return new AV.Query(Entry).find().then(entries => entries.map(entry => entry.toJSON())
  );
}

export function getEntry(id) {
  return new AV.Query(Entry).get(id).then(entry => entry.toJSON());
}

export function insertEntry(title, content) {
  const summary = {
    title,
    time: new Date().getTime(),
    content,
  };
  return new Entry(summary).save().then(entry => entry.toJSON());
}

export function deleteEntry(id) {
  const selectedEntry = AV.Object.createWithoutData('Entry', id);
  return selectedEntry.destroy();
}

export function updateEntry(id, title, content) {
  const entry = AV.Object.createWithoutData('Entry', id);
  entry.set('title', title);
  entry.set('content', content);
  return entry.save().then(updatedEntry => updatedEntry.toJSON());
}
