import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.readFile(PATH_DB, 'utf-8');

    const removeContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(removeContacts, null, 2));
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
