import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updateContacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

generateContacts(5);
