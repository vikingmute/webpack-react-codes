/*
 * @file firebase storage helpers
 */

const FIREBASE_SCRIPT_URL = 'https://cdn.firebase.com/js/client/2.2.1/firebase.js';
const FIREBASE_DATA_URL = 'https://deskmark-demo.firebaseio.com/entries/';

export const FirebasePromise = new Promise((resolve, reject) => {
  const script = Object.assign(document.createElement('script'), {
    src: FIREBASE_SCRIPT_URL,
    charset: 'utf-8',
    onload: () => resolve(window.Firebase),
    onerror: (err) => reject(err),
  });
  document.head.appendChild(script);
});

export function getRef(name) {
  return FirebasePromise.then(
    Firebase => new Firebase(`${FIREBASE_DATA_URL}${name}/`)
  );
}

export function fetch(name) {
  return getRef(name).then(
    ref => new Promise(
      (resolve, reject) => ref.once(
        'value',
        snapshot => resolve(snapshot.val()),
        reject
      )
    )
  );
}

export function save(name, data) {
  return getRef(name).then(
    ref => new Promise(
      (resolve, reject) => ref.set(
        data,
        err => (
          err
          ? reject(err)
          : resolve()
        )
      )
    )
  );
}
