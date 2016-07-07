/*
 * @file ajax helpers
 */

export function get(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } catch (e) {
          reject(e);
        }
      }
    });
    xhr.addEventListener('error', function(e) {
      reject(error);
    });
  });
}
