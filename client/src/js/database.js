import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate_table')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate_table', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jate = await openDB("jate", 1);
  const transaction = jate.transaction('jate_table', 'readwrite');
  const store = transaction.objectStore('jate_table');
  const request = store.add({content});
  const result = await request;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
